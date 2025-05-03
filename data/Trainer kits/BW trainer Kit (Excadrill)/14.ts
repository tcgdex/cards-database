import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Excadrill).ts'

const card: Card = {
	dexId: [533],
	set: Set,

	name: {
		en: "Gurdurr",
		fr: "Ouvrifier",
		es: "Gurdurr",
		it: "Gurdurr",
		pt: "Gurdurr",
		de: "Strepoli"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	evolveFrom: {
		en: "Timburr",
		fr: "Charpenti",
		es: "Timburr",
		it: "Timburr",
		pt: "Timburr",
		de: "Praktibalk"
	},

	stage: "Stage1",

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Bulk Up"
		},
		effect: {
			en: "During your next turn, each of this Pokémon's attacks does 20 more damage (before applying Weakness and Resistance)."
		}
	}, {
		cost: [
			"Fighting",
			"Fighting",
			"Colorless"
		],
		name: {
			en: "Pound"
		},
		damage: 60
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	description: {
		en: "They strengthen their bodies by carrying steel beams. They show off their big muscles to their friends."
	},

	retreat: 2,
}

export default card
