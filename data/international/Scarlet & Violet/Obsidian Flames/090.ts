import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [325],
	set: Set,

	name: {
		'fr-fr': "Spoink",
		'en-us': "Spoink",
		'es-es': "Spoink",
		'it-it': "Spoink",
		'pt-br': "Spoink",
		'de-de': "Spoink"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Trempette",
			'en-us': "Splash",
			'es-es': "Salpicadura",
			'it-it': "Splash",
			'pt-br': "Borrifada",
			'de-de': "Platscher"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Collision",
			'en-us': "Ram",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Spoink will die if it stops bouncing. The pearl on its head amplifies its psychic powers.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725170,
				tcgplayer: 509863,
				cardtrader: 255775
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725170,
				tcgplayer: 509863,
				cardtrader: 255775
			}
		},
	],

	illustrator: "GOSSAN",

	
}

export default card
