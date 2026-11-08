import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,

  name: {
		'en-us': "Floragato",
		'fr-fr': "Matourgeon",
		'es-es': "Floragato",
		'it-it': "Floragato",
		'de-de': "Feliospa",
		'pt-br': "Floragato",
		'ko-kr': "나로테"
  },

  illustrator: "Kouki Saitou",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Grass"],
  dexId: [907],
  
  evolveFrom: {
		'en-us': "Sprigatito",
		'fr-fr': "Poussacha",
		'es-es': "Sprigatito",
		'it-it': "Sprigatito",
		'de-de': "Felori",
		'pt-br': "Sprigatito",
		'ko-kr': "나오하"
  },

  description: {
    en: "The hardness of Floragato's fur depends on the Pokémon's mood. When Floragato is prepared to battle, its fur becomes pointed and needle sharp.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Leaf Step",
        fr: "Enjambée de Feuillage",
        es: "Paso Hoja",
        'es-mx': "Paso de Hoja",
        de: "Blattschritt",
        it: "Passofoglia",
        pt: "Passo de Folha"
      },
      damage: 30,
      cost: ["Grass"],
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