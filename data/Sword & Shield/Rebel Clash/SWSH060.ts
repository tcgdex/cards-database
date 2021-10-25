import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Duraludon"
	},

	illustrator: "Kazuma Koda",
	rarity: "None",
	category: "Pokemon",
	dexId: [884],
	hp: 130,
	types: ["Metal"],

	description: {
		en: "Its body resembles polished metal, and it's both lightweight and strong. The only drawback is that it rusts easily."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Metal Sharpener"
		},

		effect: {
			en: "Attach a Metal Energy card from your discard pile to 1 of your Pokémon."
		},

		damage: 30
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Power Beam"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2
}

export default card