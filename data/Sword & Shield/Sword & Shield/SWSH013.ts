import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Ponyta"
	},

	illustrator: "kirisAki",
	rarity: "None",
	category: "Pokemon",
	dexId: [77],
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "Its small horn hides a healing power. With a few rubs from this Pokémon's horn, any slight wound you have will be healed."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Heal Pulse"
		},

		effect: {
			en: "Heal 30 damage from 1 of your Pokémon."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Flop"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card