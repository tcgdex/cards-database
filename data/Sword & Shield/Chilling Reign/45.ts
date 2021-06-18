import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Ice Rider Calyrex V",
		fr: "Sylveroy Cavalier du Froid V"
	},

	illustrator: "D.A.G Inc.",
	rarity: "Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Pierce",
			fr: "Transpercement"
		},

		damage: 40,
		cost: ["Water"]
	}, {
		name: {
			en: "Glacial Lance",
			fr: "Lance de Glace"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon."
		},

		damage: 200,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card