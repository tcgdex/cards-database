import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Togepi",
		'fr-fr': "Togepi"
	},

	illustrator: "Terada Tera",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [175],
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "The shell seems to be filled with joy. It is said\nthat it will share good luck when treated kindly.",
		'fr-fr': "Sa coquille est remplie de joie. On dit que s'il est bien traité, il porte chance."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Charm",
			'fr-fr': "Charme"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon do −20 damage.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent − 20 dégâts."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card