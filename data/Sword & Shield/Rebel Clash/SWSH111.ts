import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Rapidash V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "None",
	category: "Pokemon",
	dexId: [78],
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Libra Horn"
		},

		effect: {
			en: "Put damage counters on 1 of your opponent's Pokémon until its remaining HP is 100."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Psychic"
		},

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon."
		},

		damage: "60+"
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