import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Espathra",
		fr: "Cléopsytra",
		es: "Espathra",
		it: "Espathra",
		pt: "Espathra",
		de: "Psiopatra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Psychic Flash",
			fr: "Flash Psy",
			es: "Destello Psíquico",
			it: "Psicoflash",
			pt: "Clarão Psíquico",
			de: "Psycho-Blitz"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
