import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Lillipup"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "This Pokémon is far brighter than the average\nchild, and Lillipup won't forget the love it\nreceives or any abuse it suffers."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Collect"
		},

		cost: ["Colorless"],

		effect: {
			en: "Draw a card."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card