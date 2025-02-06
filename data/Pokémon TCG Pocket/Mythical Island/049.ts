import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Koffing"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Division"
		},

		cost: ["Darkness"],

		effect: {
			en: "Put 1 random <a class=\"localized-string__link\" href=\"/pokemon/koffing/\">Koffing</a> from your deck onto your Bench."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card
