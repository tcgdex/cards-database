import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [370],
	set: Set,

	name: {
		'en-us': "Luvdisc",
		'fr-fr': "Lovdisc",
		'es-es': "Luvdisc",
		'it-it': "Luvdisc",
		'pt-br': "Luvdisc",
		'de-de': "Liebiskus"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Emotional Draw",
			'fr-fr': "Pioche Émouvante",
			'es-es': "Robo Emocional",
			'it-it': "Pesca Sentimentale",
			'pt-br': "Compra Emotiva",
			'de-de': "Emotionaler Zug"
		},

		effect: {
			'en-us': "Shuffle your hand into your deck. Then, draw 5 cards.",
			'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
			'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 5 cartas.",
			'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca cinque carte.",
			'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 5 cartas.",
			'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 5 Karten."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Luvdisc makes its home in coral reefs in warm seas. It especially likes sleeping in the space between Corsola's branches.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691752,
				tcgplayer: 478134
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691752,
				tcgplayer: 478134
			}
		},
	],
}

export default card
