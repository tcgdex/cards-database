import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [734],
	set: Set,

	name: {
		'en-us': "Yungoos",
		'fr-fr': "Manglouton",
		'es-es': "Yungoos",
		'it-it': "Yungoos",
		'pt-br': "Yungoos",
		'de-de': "Mangunior"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Sharp Fang",
			'fr-fr': "Croc Aiguisé",
			'es-es': "Colmillo Afilado",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada",
			'de-de': "Scharfe Fänge"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Although it will eat anything, it prefers fresh living things, so it marches down streets in search of prey.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691836,
				tcgplayer: 478153
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691836,
				tcgplayer: 478153
			}
		},
	],
}

export default card
