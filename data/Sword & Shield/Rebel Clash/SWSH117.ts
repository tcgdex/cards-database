import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Phanpy"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",
	dexId: [231],
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "It is strong despite its compact size. It can easily pick up and carry an adult human on its back."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Stampede"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Strike Back"
		},

		effect: {
			en: "This attack does 30 damage for each damage counter on this Pokémon."
		},

		damage: "30×"
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card