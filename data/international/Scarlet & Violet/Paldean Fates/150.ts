import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [173],
	set: Set,

	name: {
		'en-us': "Cleffa",
		'fr-fr': "Mélo",
		'es-es': "Cleffa",
		'it-it': "Cleffa",
		'pt-br': "Cleffa",
		'de-de': "Pii"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Grasping Draw",
			'fr-fr': "Pioche Happante",
			'es-es': "Robo Avaricioso",
			'it-it': "Pesca Smaniosa",
			'pt-br': "Compra Gananciosa",
			'de-de': "Beherzt zugreifen"
		},

		effect: {
			'en-us': "Draw cards until you have 7 cards in your hand.",
			'fr-fr': "Piochez des cartes jusqu'à en avoir 7 en main.",
			'es-es': "Roba cartas hasta que tengas 7 cartas en tu mano.",
			'it-it': "Pesca fino ad avere sette carte in mano.",
			'pt-br': "Compre cartas até ter 7 cartas na sua mão.",
			'de-de': "Ziehe so lange Karten, bis du 7 Karten auf deiner Hand hast."
		}
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751689,
				tcgplayer: 534636,
				cardtrader: 274333
			}
		},
	],

	illustrator: "Mizue",

	description: {
		'en-us': "Because of its unusual, starlike silhouette, people believe that it came here on a meteor.",
	},

}

export default card
