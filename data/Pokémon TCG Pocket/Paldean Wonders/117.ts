import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

    name: {
		en: "Floragato",
		fr: "Matourgeon",
		es: "Floragato",
		it: "Floragato",
		de: "Feliospa",
		'pt-br': "Floragato",
		ko: "나로테"
    },

    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",

    hp: 90,
    types: ["Grass"],
    dexId: [907],

    evolveFrom: {
		en: "Sprigatito",
		fr: "Poussacha",
		es: "Sprigatito",
		it: "Sprigatito",
		de: "Felori",
		'pt-br': "Sprigatito",
		ko: "나오하"
    },
    stage: "Stage1",

    description: {
        en: "The hardness of Floragato's fur depends on the Pokémon's mood. When Floragato is prepared to battle, its fur becomes pointed and needle sharp.",
    },

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
}

export default card