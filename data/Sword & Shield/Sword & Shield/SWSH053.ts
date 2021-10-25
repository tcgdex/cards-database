import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Machamp"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "None",
	category: "Pokemon",
	dexId: [68],
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		en: "Machoke"
	},

	description: {
		en: "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Macho Revenge"
		},

		effect: {
			en: "This attack does 20 damage for each Fighting Pokémon in your discard pile."
		},

		damage: "20×"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Dynamite Punch"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself."
		},

		damage: 200
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3
}

export default card