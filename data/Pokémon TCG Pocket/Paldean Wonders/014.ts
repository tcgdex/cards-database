import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Rellor",
		fr: "Léboulérou",
		de: "Relluk",
		it: "Rellor",
		es: "Rellor",
		pt: "Rellor",
		'es-mx': "Rellor"
  },
  illustrator: "Anesaki Dynamic",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 50,
  types: ["Grass"],
  dexId: [953],
  description: {
    en: "It rolls its mud ball around while the energy it needs for evolution matures. Eventually the time comes for it to evolve.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Ball Roll",
        fr: "Boulé-Roulade",
        es: "Rodabola",
        'es-mx': "Bola Rodante",
        de: "Ballrolle",
        it: "Rotopalla",
        pt: "Rolo Bola"
      },
      damage: "20×",
      cost: ["Colorless"],
      effect: {
        en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
        fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
        es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
        'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
        de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
        it: "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
        pt: "Jogue uma moeda até sair coroa. Este ataque causa 20 pontos de dano para cada cara."
      },
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;