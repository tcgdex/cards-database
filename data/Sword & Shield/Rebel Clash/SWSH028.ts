import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Duraludon"
	},

	illustrator: "Ryuta Fuse",
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
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Metal Claw"
		},

		damage: 70
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Steel Beam"
		},

		effect: {
			en: "This Pokémon also does 40 damage to itself."
		},

		damage: 150
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