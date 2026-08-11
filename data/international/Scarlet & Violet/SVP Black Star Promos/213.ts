import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Feraligatr",
	},
	rarity: "Promo",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil",
		'es-es': "Croconaw",
		'it-it': "Croconaw",
		'pt-br': "Croconaw",
		'de-de': "Tyracroc"
	},
	stage: "Stage2",
	illustrator: "Acorviart",
	dexId: [160],

	attacks: [
		{
			cost: ["Water","Water","Water","Colorless"],
			name: {
				'en-us': "Deep Submergence",
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of " +
					"attacks done to this Pokémon."
			},
			damage: "140",
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			stamp: ["illustration-contest-2024"],
			thirdParty: {
				cardmarket: 810397,
				tcgplayer: 620104
			},
		},
	]
}

export default card
