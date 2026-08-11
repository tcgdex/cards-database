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

    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
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
    stage: "Stage1",

    description: {
        en: "The hardness of Floragato's fur depends on the Pokémon's mood. When Floragato is prepared to battle, its fur becomes pointed and needle sharp.",
    },

    attacks: [
        {
		name: {
			'en-us': "Leaf Step",
			'fr-fr': "Enjambée de Feuillage",
			'es-es': "Paso Hoja",
			'es-mx': "Paso de Hoja",
			'de-de': "Blattschritt",
			'it-it': "Passofoglia",
			'pt-br': "Passo de Folha"
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
}

export default card