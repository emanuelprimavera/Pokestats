import React from "react";

import { ProgressBar } from "react-bootstrap";

const PokeCard = (props) => {
  return (
    <div className="card-container ">
      <div className="container col-xxl-8 px-4 py-5 shadow-lg p-3 mb-5 bg-white rounded card">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 card-img-container">
            <img
              src={props.img}
              className="d-block mx-lg-auto img-fluid"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <div className="lc-block mb-3">
              <div editable="rich" className="name-type-container">
                <h2 className="display-10">ID : {props.id}</h2>
                <h2 className="fw-bold display-4">
                  {props.name.toUpperCase()}
                </h2>
                <div className="types-container">
                  <h6 className=" display-8">{props.type}</h6>
                  <h6 className=" display-8">{props.type_two}</h6>
                </div>

                <div className="mini-sprite-container">
                  <img src={props.sprite} alt="" />
                </div>
              </div>
              <div className="pokemon-w-h font-size 2px poke-w-h">
                <h6>
                  Weight :
                  <span className="fw-bold">
                    <p>{props.weight / 10} KG</p>
                  </span>
                </h6>
                <h6>
                  Height :
                  <span className="fw-bold">
                    <p>{props.height / 10} m</p>
                  </span>
                </h6>
              </div>
            </div>

            <div className="lc-block mb-3 ">
              <div editable="rich">
                <div>
                  <h6>
                    HP :
                    <ProgressBar
                      now={props.hp}
                      variant="danger"
                      label={props.hp}
                    ></ProgressBar>
                  </h6>
                  <h6>
                    ATK :
                    <ProgressBar
                      now={props.attack}
                      variant="danger"
                      label={props.attack}
                    ></ProgressBar>
                  </h6>
                  <h6>
                    DEF :
                    <ProgressBar
                      now={props.defense}
                      variant="danger"
                      label={props.defense}
                    ></ProgressBar>
                  </h6>
                  <h6>
                    SPECIAL ATK :
                    <ProgressBar
                      now={props.special_attack}
                      variant="danger"
                      label={props.special_attack}
                    ></ProgressBar>
                  </h6>
                  <h6>
                    SPECIAL DEF :
                    <ProgressBar
                      now={props.special_defense}
                      variant="danger"
                      label={props.special_defense}
                    ></ProgressBar>
                  </h6>

                  <h6>
                    SPEED :
                    <ProgressBar
                      now={props.speed}
                      variant="danger"
                      label={props.speed}
                    ></ProgressBar>
                  </h6>
                </div>
              </div>
            </div>
            <div className="abilities-container">
              <h3>ABILITIES :</h3>
              <div className="abilities">
                <h6>{props.ability_one}</h6>
                <h6>{props.ability_two}</h6>
                {/*<li>{props.ability_three}</li>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
