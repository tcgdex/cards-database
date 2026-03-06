import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Sinistea"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		en: "Sinistea gets into your body when you drink it,\nand then it steals your vitality from within. It also\ntastes awful."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Hide"
		},

		cost: ["Psychic"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card