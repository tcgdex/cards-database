import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	stage: "Basic",

	name: {
		en: "Galarian Rapidash V",
		pt: "Galarian Rapidash V"
	},

	rarity: "None",
	hp: 210,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Libra Horn",
			pt: "Libra Horn"
		},

		effect: {
			en: "Put damage counters on 1 of your opponent's Pokémon until its remaining HP is 100.",
			pt: "Put damage counters on 1 of your opponent's Pokémon until its remaining HP is 100."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Psychic",
			pt: "Psychic"
		},

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			pt: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon."
		},

		damage: "60+",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	dexId: [78],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",
	suffix: "V"
}

export default card
