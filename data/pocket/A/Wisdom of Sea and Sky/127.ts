import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Klang",
		'fr-fr': "Clic"
	},

	illustrator: "Akira Komayama",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [600],
	hp: 80,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Klink"
	},

	description: {
		'en-us': "When Klang goes all out, the minigear links up\nperfectly with the outer part of the big gear, and\nthis Pokémon's rotation speed increases sharply.",
		'fr-fr': "Quand le combat devient sérieux, la partie extérieure du grand rouage s'aligne parfaitement avec le petit pour accélérer leur rotation."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Gear Cutter",
			'fr-fr': "Engrenage Tranchant"
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card