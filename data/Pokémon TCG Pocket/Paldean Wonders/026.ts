import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Triopikeau",
		en: "Wugtrio",
		es: "Wugtrio",
		it: "Wugtrio",
		pt: "Wugtrio",
		de: "Schligdri"
  },
  illustrator: "Kouki Saitou",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Water"],
  dexId: [961],
  evolveFrom: {
		fr: "Taupikeau",
		en: "Wiglett",
		es: "Wiglett",
		it: "Wiglett",
		pt: "Wiglett",
		de: "Schligda"
  },
  description: {
    en: "A variety of fish Pokémon, Wugtrio was once considered to be a regional form of Dugtrio.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Triple Whip",
        fr: "Triple Fouet",
        es: "Triple Latigazo",
        it: "Triplafrustata",
        pt: "Chicote Triplo",
        de: "Tripelpeitsche"
      },
      damage: "30×",
      cost: ["Water"],
      effect: {
        en: "Flip 3 coins. This attack does 30 damage for each heads.",
        fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
        es: "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
        it: "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
        pt: "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara.",
        de: "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
      },
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;