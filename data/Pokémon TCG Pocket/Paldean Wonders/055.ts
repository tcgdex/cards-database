import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Mankey",
		fr: "Férosinge",
		es: "Mankey",
		it: "Mankey",
		pt: "Mankey",
		de: "Menki"
  },
  illustrator: "nagimiso",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Fighting"],
  dexId: [56],
  description: {
    en: "It is extremely quick to anger. It could be docile one moment, then thrashing away the next instant.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Fury Swipes",
        fr: "Combo-Griffe",
        es: "Golpes Furia",
        'es-mx': "Garras Furiosas",
        de: "Kratzfurie",
        it: "Sfuriate",
        pt: "Golpes de Fúria"
      },
      damage: "10×",
      cost: ["Fighting"],
      effect: {
        en: "Flip 3 coins. This attack does 10 damage for each heads.",
        fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
        de: "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
        it: "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
        es: "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
        pt: "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
        'es-mx': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara."
      },
    },
  ],
  weaknesses: [
    {
      type: "Psychic",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;