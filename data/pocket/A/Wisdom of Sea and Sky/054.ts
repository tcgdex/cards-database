import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Corsola",
		'fr-fr': "Corayon"
	},

	illustrator: "Mékayu",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [222],
	hp: 80,
	types: ["Water"],

	description: {
		'en-us': "It will regrow any branches that break off its\nhead. People keep particularly beautiful Corsola\nbranches as charms to promote safe childbirth.",
		'fr-fr': "Ses branches repoussent si elles sont brisées. Les plus belles sont offertes aux futures mamans comme porte-bonheurs."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Find a Friend",
			'fr-fr': "Trouver un Ami"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Put a random Pokémon from your deck into your hand.",
			'fr-fr': "Ajoutez au hasard un Pokémon de votre deck à votre main."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card