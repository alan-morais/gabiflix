import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(evento) {
    // const { getAttribute, value } = evento.target;
    setValue(
      evento.target.getAttribute('name'),
      evento.target.value,
    );
  }
  useEffect(() => {
    console.log('alo alo w brazil');
    setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          id: 1,
          nome: 'Chaves',
          descricao: 'Melhor de chaves',
          cor: '#6bd1ff',
        },
        {
          id: 2,
          nome: 'Batman',
          descricao: 'Melhor de batman',
          cor: '#cbbcdd',
        },
      ]);
    });
  });
  return (
    <PageDefault>
      <h1>
        Cadastro Categoria:
        {values.nome}
      </h1>
      <form onSubmit={
                function handleSubmit(evento) {
                  evento.preventDefault();
                  setCategorias([
                    ...categorias,
                    values,
                  ]);
                  setValues(valoresIniciais);
                }
            }
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="????"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0
      && (
      <div>
        Carregando...
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Voltar para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
