import { Peças } from "./Peças";
import { Periféricos } from "./Peças";

let Total = 0;

Peças.map((preço) => {
  Total += preço.preço;
  return Total;
});

Periféricos.map((preço) => {
  Total += preço.preço;
  Total = Math.round(Total);
  return Total;
});

function App() {
  return (
    <>
      <main>
        <section className="centro">
          <h1>Pc de Lavigne</h1>
          <table className="preços">
            <thead>
              <tr>
                <th scope="col">Peça</th>
                <th scope="col">Preço</th>
              </tr>
            </thead>
            <tbody>
              {Peças.map((peça) => {
                const { href, target, rel, nome, preço, classe } = peça;
                return (
                  <tr>
                    <td>
                      <a
                        href={href}
                        target={target}
                        rel={rel}
                        className={classe}
                      >
                        {nome}
                      </a>
                    </td>
                    <td className={classe}>R${preço}</td>
                  </tr>
                );
              })}
              <tr>
                <th scope="col">Periférico</th>
                <th scope="col">Preço</th>
              </tr>
              {Periféricos.map((periférico) => {
                const { href, target, rel, nome, preço } = periférico;
                return (
                  <tr>
                    <td>
                      <a href={href} target={target} rel={rel}>
                        {nome}
                      </a>
                    </td>
                    <td>R${preço}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th id="total">Total:</th>
                <th id="total">
                  <p id="totalPreço">R${Total}</p>
                </th>
              </tr>
            </tfoot>
          </table>
        </section>
      </main>
    </>
  );
}

export default App;
