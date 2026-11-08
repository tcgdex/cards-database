import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cleffa",
		'fr-fr': "Mélo"
	},

	illustrator: "Orca",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [173],
	hp: 30,
	types: ["Psychic"],

	description: {
		'en-us': "According to local rumors, Cleffa are often seen\nin places where shooting stars have fallen.",
		'fr-fr': "On dit qu'il apparaît souvent là où se sont écrasées des météorites."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Twinkly Call",
			'fr-fr': "Appel qui Brille"
		},

		effect: {
			'en-us': "Put a random Pokémon from your deck into your hand.",
			'fr-fr': "Ajoutez au hasard un Pokémon de votre deck à votre main."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["lugia"]
}

export default card