import { useState } from "react";

function CreateProduct() {
  const [name, setName] = useState("");
  const [modelo, setModelo] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoSapato = { name, modelo, image };

    try {
      const response = await fetch("http://localhost:8080/sapatos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoSapato),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar produto");
      }

      const data = await response.json();
      console.log("Produto criado:", data);


      setName("");
      setModelo("");
      setImage("");
      alert("Produto criado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao criar produto!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nome do Sapato</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Modelo</label>
        <input
          type="text"
          className="form-control"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">URL da Imagem</label>
        <input
          type="text"
          className="form-control"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Criar Produto
      </button>
    </form>
  );
}

export default CreateProduct;
