import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		en: "Pawmot",
		fr: "Pohmarmotte",
		es: "Pawmot",
		it: "Pawmot",
		de: "Pamomamo",
		'pt-br': "Pawmot",
		ko: "빠르모트"
	},

    illustrator: "whomor Inc.",
    rarity: "One Shiny",
    category: "Pokemon",

    hp: 140,
    types: ["Lightning"],
    dexId: [923],
    
    evolveFrom: {
		en: "Pawmo",
		fr: "Pohmotte",
		es: "Pawmo",
		'es-mx': "Pawmo",
		de: "Pamamo",
		it: "Pawmo",
		pt: "Pawmo"
    },
    stage: "Stage2",

    description: {
        en: "Pawmot's fluffy fur acts as a battery. It can store the same amount of electricity as an electric car.",
    },

    attacks: [
        {
		name: {
			en: "Thunder Blast",
			fr: "Grondement de Tonnerre",
			es: "Estallido Trueno",
			'es-mx': "Explosión Atronadora",
			de: "Donnerkeil",
			it: "Tuonobomba",
			pt: "Explosão de Trovões"
		},
        damage: "100",
        cost: ["Lightning", "Lightning"],
        effect: {
            en: "Discard a Lightning Energy from this Pokémon.",
        },
        },
    ],

    weaknesses: [
        {
        type: "Fighting",
        value: "+20",
        },
    ],

    retreat: 1,
}

export default card