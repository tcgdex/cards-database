import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [173],
	set: Set,

	name: {
		'fr-fr': "Mélo",
		'en-us': "Cleffa",
		'es-es': "Cleffa",
		'it-it': "Cleffa",
		'pt-br': "Cleffa",
		'de-de': "Pii"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'fr-fr': "Pioche Happante",
			'en-us': "Grasping Draw",
			'es-es': "Robo Avaricioso",
			'it-it': "Pesca Smaniosa",
			'pt-br': "Compra Gananciosa",
			'de-de': "Beherzt zugreifen"
		},

		effect: {
			'fr-fr': "Piochez des cartes jusqu'à en avoir 7 en main.",
			'en-us': "Draw cards until you have 7 cards in your hand.",
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

	description: {
		'en-us': "Because of its unusual, starlike silhouette, people believe that it came here on a meteor.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725282,
				tcgplayer: 509949,
				cardtrader: 255644
			}
		},
	],

	illustrator: "HYOGONOSUKE",

	
}

export default card
