import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [420],
	set: Set,

	name: {
		'en-us': "Cherubi",
		'fr-fr': "Ceribou",
		'es-es': "Cherubi",
		'it-it': "Cherubi",
		'pt-br': "Cherubi",
		'de-de': "Kikugi"
	},

	illustrator: "Lee HyunJung",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Leafage",
			'fr-fr': "Feuillage",
			'es-es': "Follaje",
			'it-it': "Fogliame",
			'pt-br': "Folhagem",
			'de-de': "Blattwerk"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",


	description: {
		'en-us': "The deeper a Cherubi's red, the more nutrients it has stockpiled in its body. And the sweeter and tastier its small ball!",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691728,
				tcgplayer: 478060
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691728,
				tcgplayer: 478060
			}
		},
	],
}

export default card
