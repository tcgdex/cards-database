import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [343],
	set: Set,

	name: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
		'es-es': "Baltoy",
		'it-it': "Baltoy",
		'pt-br': "Baltoy",
		'de-de': "Puppance"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Sumiyoshi Kizuki",

	description: {
		'en-us': "It was discovered in ancient ruins. While moving, it constantly spins. It stands on one foot even when asleep."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Smack",
			'fr-fr': "Claque",
			'de-de': "Klatscher",
			'es-es': "Palmetazo",
			'pt-br': "Estalo",
			'it-it': "Schiaffo"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582768,
				tcgplayer: 253356
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582768,
				tcgplayer: 253356
			}
		},
	],
}

export default card
