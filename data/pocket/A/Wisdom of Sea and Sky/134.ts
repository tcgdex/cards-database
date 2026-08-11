import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	illustrator: "sowsow",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "Its ability to evolve into many forms allows it to\nadapt smoothly and perfectly to any environment.",
		'fr-fr': "Ses multiples évolutions lui permettent de s'adapter à tout type de milieu naturel."
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
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card