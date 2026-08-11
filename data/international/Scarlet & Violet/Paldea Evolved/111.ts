import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [247],
	set: Set,

	name: {
		'fr-fr': "Ymphect",
		'en-us': "Pupitar",
		'es-es': "Pupitar",
		'it-it': "Pupitar",
		'pt-br': "Pupitar",
		'de-de': "Pupitar"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Embrylex",
		'en-us': "Larvitar",
		'es-es': "Larvitar",
		'it-it': "Larvitar",
		'pt-br': "Larvitar",
		'de-de': "Larvitar"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Culbute Surprise",
			'en-us': "Headbutt Bounce",
			'es-es': "Bote Cabezazo",
			'it-it': "Rimbalzo Bottintesta",
			'pt-br': "Cabeçada Ricochete",
			'de-de': "Abrupter Kopfstoß"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715586,
				tcgplayer: 497526,
				cardtrader: 248757
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 858715
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715586,
				tcgplayer: 497526,
				cardtrader: 248757
			}
		},
	],

	illustrator: "Shigenori Negishi",

	description: {
		'en-us': "This pupa flies around wildly by venting with great force the gas pressurized inside its body.",
	},
}

export default card
