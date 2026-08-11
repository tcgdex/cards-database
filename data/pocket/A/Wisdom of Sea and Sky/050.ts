import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Azumarill",
		'fr-fr': "Azumarill"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [184],
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Marill"
	},

	description: {
		'en-us': "Its long ears are superb sensors. It can distinguish\nthe movements of things in water and tell what\nthey are.",
		'fr-fr': "Ses longues oreilles lui permettent d'entendre tout ce qui se passe sous l'eau de manière très distincte."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Thick Fat",
			'fr-fr': "Isograisse"
		},

		effect: {
			'en-us': "This Pokémon takes −30 damage from attacks from {R} or {W} Pokémon.",
			'fr-fr': "Ce Pokémon subit − 30 dégâts provenant des attaques des Pokémon {R} ou {W}."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Tail Smack",
			'fr-fr': "Coup de Queue"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card