import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [428],
	set: Set,

	name: {
		'en-us': "Lopunny",
		'fr-fr': "Lockpin",
		'es-es': "Lopunny",
		'pt-br': "Lopunny",
		'it-it': "Lopunny",
		'de-de': "Schlapor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'es-es': "Buneary",
		'pt-br': "Buneary",
		'it-it': "Buneary",
		'de-de': "Haspiror"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'pt-br': "Chute Traseiro",
			'it-it': "Retrocalcio",
			'de-de': "Rückwärtskick"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Tika Matsuno",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805476,
				tcgplayer: 610439
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805476,
				tcgplayer: 610439
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806528,
				tcgplayer: 610597
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806529,
				tcgplayer: 610698
			}
		},
	],
}

export default card
