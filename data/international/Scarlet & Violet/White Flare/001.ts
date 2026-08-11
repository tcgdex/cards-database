import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [540],
	set: Set,

	name: {
		'en-us': "Sewaddle",
		'fr-fr': "Larveyette",
		'de-de': "Strawickl",
		'it-it': "Sewaddle",
		'pt-br': "Sewaddle",
		'es-es': "Sewaddle",
		'es-mx': "Sewaddle"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'de-de': "Käferbiss",
			'it-it': "Coleomorso",
			'pt-br': "Picada",
			'es-es': "Picadura",
			'es-mx': "Picadura"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835898,
				tcgplayer: 642116
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835898,
				tcgplayer: 642116
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836493,
				tcgplayer: 642362
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836494,
				tcgplayer: 642290
			}
		},
	],
}

export default card
