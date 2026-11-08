import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Toxtricity ex",
	},

	suffix: "ex",
	rarity: "Promo",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Toxel",
		'fr-fr': "Toxizap",
		'es-es': "Toxel",
		'it-it': "Toxel",
		'pt-br': "Toxel",
		'de-de': "Toxel"
	},
	stage: "Stage1",
	illustrator: "Anderson",
	dexId: [849],

	attacks: [
		{
			cost: ["Lightning","Lightning","Colorless"],
			name: {
				'en-us': "Stumming Thunder",
			},
			effect: {
				'en-us': 	"Discard 2 Energy from this Pokémon."
			},
			damage: "240",
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			stamp: ["illustration-contest-2024"],
			thirdParty: {
				cardmarket: 810399,
				tcgplayer: 620107
			},
		},
	]
}

export default card
