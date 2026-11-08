import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Greedent",
		'fr-fr': "Rongrigou"
	},

	illustrator: "kirisAki",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [820],
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Skwovet"
	},

	description: {
		'en-us': "This Pokémon makes off with heaps of fallen berries by wrapping\nthem in its tail, which is roughly twice the length of its body.",
		'fr-fr': "Sa queue, qui est environ deux fois plus longue que son corps, lui permet d'emmagasiner et de transporter les Baies tombées des arbres."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Enhanced Fang",
			'fr-fr': "Croc Amélioré"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
			'fr-fr': "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card