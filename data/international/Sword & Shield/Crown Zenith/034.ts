import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [361],
	set: Set,

	name: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
		'es-es': "Snorunt",
		'it-it': "Snorunt",
		'pt-br': "Snorunt",
		'de-de': "Schneppke"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",


	description: {
		'en-us': "It can only survive in cold areas. It bounces happily around, even in environments as cold as -150 degrees Fahrenheit.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691751,
				tcgplayer: 478133
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691751,
				tcgplayer: 478133
			}
		},
	],
}

export default card
