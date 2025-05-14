import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Azelf",
		fr: "Créfadet",
		es: "Azelf",
		it: "Azelf",
		de: "Tobutz",
		'pt-br': "Azelf",
		ko: "아그놈"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "Known as \"The Being of Willpower.\" It sleeps at the bottom of a lake to keep the world in balance."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Psychic Arrow"
		},

		cost: ["Psychic"],

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card
