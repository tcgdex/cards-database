import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [397],
	set: Set,

	name: {
		'en-us': "Staravia",
		'fr-fr': "Étourvol",
		'es-es': "Staravia",
		'it-it': "Staravia",
		'pt-br': "Staravia",
		'de-de': "Staravia"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Starly",
		'fr-fr': "Étourmi",
		'es-es': "Starly",
		'it-it': "Starly",
		'pt-br': "Starly",
		'de-de': "Staralili"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Wing Attack",
			'fr-fr': "Cru-Ailes",
			'es-es': "Ataque Ala",
			'it-it': "Attacco d'Ala",
			'pt-br': "Ataque de Asa",
			'de-de': "Flügelschlag"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
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
	regulationMark: "F",


	description: {
		'en-us': "It lives in forests and fields. Squabbles over territory occur when flocks collide.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608664,
				tcgplayer: 263843
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608664,
				tcgplayer: 263843
			}
		},
	],
}

export default card
