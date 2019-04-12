import React, { Component } from "react";
import imageJson from "../image.json";
import { BrandsList, Heading, P, Li } from "./bInFstyle";
export default class BrandsInFocus extends Component {
    render() {
        const image = imageJson["brands-focus-images"];

        return (
            <section>
                <Heading>BRANDS IN FOCUS</Heading>
                <P>Show some brand love</P>
                <BrandsList>
                    {image.map((e, i) => (
                        <Li image={e.image}>
              <span>
                <h4>{e["brand-name"]}</h4>
                <h5>{e.message}</h5>
              </span>
                        </Li>
                    ))}
                </BrandsList>
            </section>
        );
    }
}