"use client"
import React from "react";

import { DATA_CONTACT } from "../../src/Data/Constant";
const Contacter = () => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const element = form.elements;

    const nom = element.Nom.Value;
    const prenom = element.Prenom.Value;
    const email = element.Email.Value;
    const entreprise = element.Entreprise.Value;
    const telephone = element.Telephone.Value;
    const checkbox = element.Checkbox.Value;

    const objetForm = {
      nom: nom,
      prenom: prenom,
      email: email,
      entreprise: entreprise,
      telephone: telephone,
      checkbox: checkbox,
    };
    console.log("form:" + objetForm);

    form.reset();
  };
  return (
      <section className="">
        <div className="mx-auto pb-[100px] lg:pb-[100px] pt-[50px] px-[20px] lg:px-[100px] xl:px-[200pxx] 2xl:px-[300pxx] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
          <div className="lg:flex gap-5">
            {/* left */}
            <div className="lg:w-[50%]">
              <div className="pb-10">
                <h1 className="text-[40px] lg:text-[60px] font-bold pb-[15px]">
                  {DATA_CONTACT.left.h1}
                </h1>
                <p>{DATA_CONTACT.left.p1}</p>
              </div>
              {/* nos adresses */}
              <div className="pb-5">
                <h3 className="font-semibold pb-3">
                  {DATA_CONTACT.left.coordonnees.h3}
                </h3>
                <p className="pb-2">{DATA_CONTACT.left.coordonnees.num}</p>
                <p>{DATA_CONTACT.left.coordonnees.lenkSite}</p>
              </div>
              {/* adress */}
              <div className="pb-5">
                <h3 className="font-semibold pb-2">
                  {DATA_CONTACT.left.adresse.h3}
                </h3>
                <p>{DATA_CONTACT.left.adresse.rue}</p>
              </div>
            </div>
            {/* formulaire */}
            <div className="lg:w-[50%]  border-[#172153] mt-10 lg:mt-0 ">
              <form
                onSubmit={handlerSubmit}
                className="mx-auto px-6 pt-10 pb-8 sm:max-w-[540px] md:max-w-[720pxx] lg:max-w-[960pxx] xl:max-w-[1140pxx] 2xl:max-w-[1320pxx] 3xl:max-w-[1620pxx]"
                action=""
              >
                <input
                  className="mb-6 border-[1px] text-slate-900 bg-[#F1F5F7] w-full px-4 py-2"
                  type={DATA_CONTACT.right.form.inputs.inputNom.type}
                  id={DATA_CONTACT.right.form.inputs.inputNom.nom}
                  required
                  placeholder={DATA_CONTACT.right.form.inputs.inputNom.nom}
                />
                <input
                  className="mb-6 border-[1px] bg-[#F1F5F7] w-full px-4 py-2"
                  type={DATA_CONTACT.right.form.inputs.inputPrenom.type}
                  id={DATA_CONTACT.right.form.inputs.inputPrenom.nom}
                  required
                  placeholder={DATA_CONTACT.right.form.inputs.inputPrenom.nom}
                />
                <input
                  className="mb-6 border-[1px] bg-[#F1F5F7] w-full px-4 py-2"
                  type={DATA_CONTACT.right.form.inputs.inputEmail.type}
                  id={DATA_CONTACT.right.form.inputs.inputEmail.nom}
                  placeholder={DATA_CONTACT.right.form.inputs.inputEmail.nom}
                />
                <input
                  className="mb-6 border-[1px] bg-[#F1F5F7] w-full px-4 py-2"
                  type={DATA_CONTACT.right.form.inputs.inputEntreprise.type}
                  id={DATA_CONTACT.right.form.inputs.inputEntreprise.nom}
                  placeholder={
                    DATA_CONTACT.right.form.inputs.inputEntreprise.nom
                  }
                />
                <input
                  className="mb-6 border-[1px] bg-[#F1F5F7] w-full px-4 py-2"
                  type={DATA_CONTACT.right.form.inputs.inputTelephone.type}
                  id={DATA_CONTACT.right.form.inputs.inputTelephone.nom}
                  placeholder={DATA_CONTACT.right.form.inputs.inputTelephone.nom}
                />
                {/* <textarea
                  required
                  rows={DATA_CONTACT.right.form.inputs.inputCheckbox.type}
                  className="mb-2 text-white border-[1px] bg-[#172153] w-full px-4 py-2"
                  type={DATA_CONTACT.right.form.inputs.inputMessage.nom}
                  id={DATA_CONTACT.right.form.inputs.inputMessage.nom}
                  placeholder={DATA_CONTACT.right.form.inputs.inputMessage.nom}
                /> */}
                <input
                  type={DATA_CONTACT.right.form.inputs.inputCheckbox.type}
                  id={DATA_CONTACT.right.form.inputs.inputCheckbox.nom}
                />{" "}
                <label
                  className="text-white text-[13px] lg:text-[16px]"
                  htmlFor={DATA_CONTACT.right.form.inputs.inputlabel.htmlFor}
                >
                  {DATA_CONTACT.right.form.inputs.inputlabel.text}
                </label>
                <button
                  className="bg-[#FFEB3B] block border-[2px] px-10 py-2 mt-2 lg:mt-3 rounded-3xl"
                  // type={DATA_CONTACT.right.form.inputs.btn.type}
                >
                  {DATA_CONTACT.right.form.inputs.btn.text}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contacter;