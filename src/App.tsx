import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import "./App.css";
import { Reorder } from "motion/react";

type OrchestraFormData = {
  orgaoEletronico?: number;
  violino?: number;
  viola?: number;
  violoncelo?: number;
  flautaTransversal?: number;
  oboe?: number;
  oboeDAmore?: number;
  corneIngles?: number;
  fagote?: number;
  clarinete?: number;
  clarineteAlto?: number;
  clarineteBaixo?: number;
  saxofoneSoprano?: number;
  saxofoneAlto?: number;
  saxofoneTenor?: number;
  saxofoneBaritono?: number;
  trompeteCornet?: number;
  flugelhorn?: number;
  trompa?: number;
  tromboneTrombonito?: number;
  baritono?: number;
  eufonio?: number;
  tuba?: number;
  hinos: number[];
};

function App() {
  const { register, handleSubmit, setValue, watch } =
    useForm<OrchestraFormData>({ defaultValues: { hinos: [1, 12] } });

  const [hymnNumber, setHymnNumber] = useState<string>("");
  const hinos = watch("hinos") || [];

  const handleOrchestraSubmit: SubmitHandler<OrchestraFormData> = (data) => {
    console.log(data);
  };

  const addHymn = () => {
    const num = parseInt(hymnNumber);
    if (num && !hinos.includes(num) && num >= 1 && num <= 480) {
      setValue("hinos", [...hinos, num]);
    }
    setHymnNumber("");
  };

  const removeHymn = (index: number) => {
    setValue(
      "hinos",
      hinos.filter((_, i) => i !== index)
    );
  };

  return (
    <main>
      <form
        className="form orchestra-form"
        onSubmit={handleSubmit(handleOrchestraSubmit)}
      >
        <h2 className="title">Instrumentos</h2>
        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            autoComplete="off"
            type="number"
            id="orgaoEletronico"
            {...register("orgaoEletronico")}
          />
          <label htmlFor="orgaoEletronico" className="label">
            Órgão Eletrônico
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            autoComplete="off"
            id="violino"
            type="number"
            {...register("violino")}
          />
          <label htmlFor="violino" className="label">
            Violino
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="viola"
            autoComplete="off"
            type="number"
            {...register("viola")}
          />
          <label htmlFor="viola" className="label">
            Viola
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="violoncelo"
            autoComplete="off"
            type="number"
            {...register("violoncelo")}
          />
          <label htmlFor="violoncelo" className="label">
            Violoncelo
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="flautaTransversal"
            autoComplete="off"
            type="number"
            {...register("flautaTransversal")}
          />
          <label htmlFor="flautaTransversal" className="label">
            Flauta Transversal
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="oboe"
            autoComplete="off"
            type="number"
            {...register("oboe")}
          />
          <label htmlFor="oboe" className="label">
            Oboé
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="oboeDAmore"
            autoComplete="off"
            type="number"
            {...register("oboeDAmore")}
          />
          <label htmlFor="oboeDAmore" className="label">
            Oboé d'Amore
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="corneIngles"
            autoComplete="off"
            type="number"
            {...register("corneIngles")}
          />
          <label htmlFor="corneIngles" className="label">
            Corne Inglês
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="fagote"
            autoComplete="off"
            type="number"
            {...register("fagote")}
          />
          <label htmlFor="fagote" className="label">
            Fagote
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="clarinete"
            autoComplete="off"
            type="number"
            {...register("clarinete")}
          />
          <label htmlFor="clarinete" className="label">
            Clarinete
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="clarineteAlto"
            autoComplete="off"
            type="number"
            {...register("clarineteAlto")}
          />
          <label htmlFor="clarineteAlto" className="label">
            Clarinete Alto
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="clarineteBaixo"
            autoComplete="off"
            type="number"
            {...register("clarineteBaixo")}
          />
          <label htmlFor="clarineteBaixo" className="label">
            Clarinete Baixo
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="saxofoneSoprano"
            autoComplete="off"
            type="number"
            {...register("saxofoneSoprano")}
          />
          <label htmlFor="saxofoneSoprano" className="label">
            Saxofone Soprano
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="saxofoneAlto"
            autoComplete="off"
            type="number"
            {...register("saxofoneAlto")}
          />
          <label htmlFor="saxofoneAlto" className="label">
            Saxofone Alto
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="saxofoneTenor"
            autoComplete="off"
            type="number"
            {...register("saxofoneTenor")}
          />
          <label htmlFor="saxofoneTenor" className="label">
            Saxofone Tenor
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="saxofoneBaritono"
            autoComplete="off"
            type="number"
            {...register("saxofoneBaritono")}
          />
          <label htmlFor="saxofoneBaritono" className="label">
            Saxofone Barítono
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="trompeteCornet"
            autoComplete="off"
            type="number"
            {...register("trompeteCornet")}
          />
          <label htmlFor="trompeteCornet" className="label">
            Trompete/Cornet
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="flugelhorn"
            autoComplete="off"
            type="number"
            {...register("flugelhorn")}
          />
          <label htmlFor="flugelhorn" className="label">
            Flugelhorn
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="trompa"
            autoComplete="off"
            type="number"
            {...register("trompa")}
          />
          <label htmlFor="trompa" className="label">
            Trompa
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="tromboneTrombonito"
            autoComplete="off"
            type="number"
            {...register("tromboneTrombonito")}
          />
          <label htmlFor="tromboneTrombonito" className="label">
            Trombone/Trombonito
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            id="baritono"
            autoComplete="off"
            type="number"
            {...register("baritono")}
          />
          <label htmlFor="baritono" className="label">
            Barítono
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            placeholder=" "
            autoComplete="off"
            id="eufonio"
            type="number"
            {...register("eufonio")}
          />
          <label htmlFor="eufonio" className="label">
            Eufônio
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            id="tuba"
            placeholder=" "
            autoComplete="off"
            type="number"
            {...register("tuba")}
          />
          <label htmlFor="tuba" className="label">
            Tuba
          </label>
        </div>

        <h2 className="title">Hinos</h2>

        <div className="hymn-form">
          <div className="content">
            <div className="input-group hymn-input">
              <input
                id="hymnNumber"
                placeholder=" "
                autoComplete="off"
                type="number"
                className="input"
                value={hymnNumber}
                min="1"
                max="480"
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!e.target.value || (value >= 1 && value <= 480)) {
                    setHymnNumber(e.target.value);
                  }
                }}
              />
              <label htmlFor="hymnNumber" className="label">
                Hino
              </label>
            </div>
            <button
              type="button"
              className="add-hymn-btn"
              onClick={addHymn}
            ></button>
          </div>
        </div>

        <Reorder.Group
          axis="y"
          values={hinos}
          onReorder={(newOrder) => setValue("hinos", newOrder)}
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          {hinos.map((hymn, index) => (
            <Reorder.Item key={hymn} value={hymn} style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.2)", borderRadius: "0.5rem" }}>
              <div className="hymn-item">
                <input
                  className="description"
                  type="number"
                  id={`hinos.${index}`}
                  {...register(`hinos.${index}`)}
                  value={hymn}
                  readOnly
                />
                <button
                  className="remove"
                  type="button"
                  onClick={() => removeHymn(index)}
                ></button>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>

        <button type="submit">Gerar pdf</button>
      </form>
    </main>
  );
}

export default App;
