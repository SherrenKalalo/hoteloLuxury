import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../styles/editkamar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditKamar = ({ kamar_id }) => {
  const [jenisKamar, setJenisKamar] = useState("");
  const [hargaKamar, setHargaKamar] = useState(0);
  const [jumlahKamar, setJumlahKamar] = useState(0);
  const [urlGambar, setUrlGambar] = useState(null);

  const [responseDataKamar, setResponseDataKamar] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    ambilDataKamar();
  }, []);

  useEffect(() => {
    if (responseDataKamar) {
      setJenisKamar(responseDataKamar.jenis_kamar);
      setHargaKamar(responseDataKamar.harga_per_malam);
      setJumlahKamar(responseDataKamar.jumlah_kamar);
      setUrlGambar(responseDataKamar.url_image);
    }
  }, [responseDataKamar]);

  const ambilDataKamar = async () => {
    try {
      const result = await axios.get(`http://app-7f71eebb-31d0-4c49-8cb0-d3bd849a9587.cleverapps.io/kamar/${kamar_id}`);

      setResponseDataKamar(result.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateKamar = async (e) => {
    e.preventDefault();
    try {
      const inputGambar = document.getElementById("gambar-kamar");

      const fileGambar = inputGambar.files[0];

      const formData = new FormData();
      formData.append("jenis_kamar", jenisKamar);
      formData.append("harga_per_malam", hargaKamar);
      formData.append("jumlah_kamar", jumlahKamar);
      formData.append("file", fileGambar);

      const hasil = await axios.patch(`http://app-7f71eebb-31d0-4c49-8cb0-d3bd849a9587.cleverapps.io/kamar/${kamar_id}`, formData);
      console.log("ini hasil edit gambar kamar", hasil);

      navigate("/admin/kamar");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="dash">
      <header className="headerStyle">
        <h6 className="ms-4 mt-2">Edit Data Kamar</h6>
      </header>
      <div className="formContainer">
        <Form style={{ textAlign: "center" }} onSubmit={updateKamar}>
          <img src={urlGambar} alt="" style={{ margin: "auto", marginTop: "20px", width: "300px" }} />
          <Form.Group controlId="namaKamar" className="form-group-inline mt-5" style={{ textAlign: "left" }}>
            <Form.Label>Nama Kamar:</Form.Label>
            <Form.Control type="text" className="form-control-width custom-input" value={jenisKamar} onChange={(e) => setJenisKamar(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="harga" className="form-group-inline mt-4" style={{ textAlign: "left" }}>
            <Form.Label>Harga:</Form.Label>
            <Form.Control type="number" className="form-control-width custom-input" value={hargaKamar} onChange={(e) => setHargaKamar(e.target.value)} />
          </Form.Group>
          <div className="form-group-row">
            <Form.Group controlId="jumlahKamar" className="form-group-inline mt-4" style={{ textAlign: "left" }}>
              <Form.Label>Jumlah Kamar:</Form.Label>
              <Form.Control type="number" className="form-control-medium1-width custom-input" value={jumlahKamar} onChange={(e) => setJumlahKamar(e.target.value)} />
            </Form.Group>
            <Form.Group className="form-group-kanan mt-4" style={{ textAlign: "left" }}>
              <Form.Label className="tm2">Edit Gambar:</Form.Label>
              <Form.Control type="file" id="gambar-kamar" className="custom-input" />
            </Form.Group>
          </div>
          <Button type="submit" variant="warning" className="custom-button mb-5 mt-4">
            Simpan
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditKamar;