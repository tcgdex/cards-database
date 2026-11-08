import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [674],
	set: Set,

	name: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'it-it': "Pancham",
		'pt-br': "Pancham",
		'de-de': "Pam-Pam"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Chop",
			'fr-fr': "Coup Tranchant",
			'es-es': "Cortar",
			'it-it': "Ceffone",
			'pt-br': "Trincar",
			'de-de': "Hacker"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It chooses a Pangoro as its master and then imitates its master's actions. This is how it learns to battle and hunt for prey.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691790,
				tcgplayer: 478201
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691790,
				tcgplayer: 478201
			}
		},
	],
}

export default card
