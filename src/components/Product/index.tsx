import React from "react";

import tshirtImage from "../../assets/tshirt.png";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ProductAction /> */}
          {/* <SellerInfo /> */}

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      i Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti
      vero molestias accusantium, mollitia, nihil libero iusto rerum assumenda
      excepturi fugiat quo placeat ratione quasi veritatis. Soluta iste non ex
      dolor molestias at dignissimos incidunt, dolorum nemo nesciunt quos fugiat
      obcaecati porro. Voluptatibus, a. Explicabo eum ducimus odio cum. Debits!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor
      temporibus necessitatibus, suscipit pariatur ut consectetur ea eius
      doloremque vitae? Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Sed laborum similique tempore cum quasi deleniti quaerat praesentium
      labore incidunt, quod amet blanditiis quia debitis consequuntur nostrum
      ipsa. Quas architecto ipsa facilis quaerat voluptates, doloremque pariatur
      est, quisquam corporis et nulla? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Quas quisquam sunt quasi ipsa inventore dolorem. Saepe
      incidunt corrupti cum magnam.
      <br />
      <br />
      Itens incluso: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
      tempore maiores facilis quia tempora omnis, quo nobis eos ea reiciendis
      commodi rem! Quos eaque eveniet, aliquam temporibus dicta dolor eos dolore
      quisquam mollitia consectetur, ex nostrum consequuntur, harum illo
      quibusdam esse eum in non quo cupiditate at! Amet, nemo nisi! Lorem, ipsum
      dolor sit amet consectetur adipisicing elit. Repellendus aliquam quibusdam
      ratione quasi expedita natus impedit eaque placeat asperiores commodi
      saepe laborum consequuntur molestias eos, esse ducimus totam vitae numquam
      a quisquam! Magnam beatae explicabo sint placeat dignissimos laboriosam
      repudiandae.
    </p>
  </Description>
);

export default Product;
