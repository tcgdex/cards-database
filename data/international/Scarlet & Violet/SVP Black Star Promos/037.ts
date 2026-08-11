import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

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

	rarity: "Promo",
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
	illustrator: "Mina Nakai",
	description: {
		'en-us': "Because of its unusual, starlike silhouette, people believe that it came here on a meteor.",
	},
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 720387,
				tcgplayer: 512896
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 761128,
				tcgplayer: 513423
			},
		}
	],
}

export default card
