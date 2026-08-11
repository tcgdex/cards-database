import { Card } from "models/database/card"
import Set from "../Crown Zenith"

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

	illustrator: "Nagomi Nijo",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Smack",
			'fr-fr': "Claque",
			'es-es': "Palmetazo",
			'it-it': "Schiaffo",
			'pt-br': "Estalo",
			'de-de': "Klatscher"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",


	description: {
		'en-us': "It was discovered in ancient ruins. While moving, it constantly spins. It stands on one foot even when asleep.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691788,
				tcgplayer: 478197
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691788,
				tcgplayer: 478197
			}
		},
	],
}

export default card
