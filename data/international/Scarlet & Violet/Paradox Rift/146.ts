import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [424],
	set: Set,

	name: {
		'en-us': "Ambipom",
		'fr-fr': "Capidextre",
		'es-es': "Ambipom",
		'it-it': "Ambipom",
		'pt-br': "Ambipom",
		'de-de': "Ambidiffel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'es-es': "Aipom",
		'it-it': "Aipom",
		'pt-br': "Aipom",
		'de-de': "Griffel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'es-es': "Coleccionar",
			'it-it': "Tassa",
			'pt-br': "Coleta",
			'de-de': "Sammeln"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hand Fling",
			'fr-fr': "Catapu-Main",
			'es-es': "Golpe de Mano",
			'it-it': "Manofionda",
			'pt-br': "Arremesso de Mão",
			'de-de': "Handwurf"
		},

		effect: {
			'en-us': "This attack does 20 damage for each card in your hand.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque carte dans votre main.",
			'es-es': "Este ataque hace 20 puntos de daño por cada carta en tu mano.",
			'it-it': "Questo attacco infligge 20 danni per ogni carta che hai in mano.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada carta na sua mão.",
			'de-de': "Diese Attacke fügt für jede Karte auf deiner Hand 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It uses its tails for everything. If it wraps both of its tails around you and gives you a squeeze, that's proof it really likes you.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740685,
				tcgplayer: 523827,
				cardtrader: 265257
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740685,
				tcgplayer: 523827,
				cardtrader: 265257
			}
		},
	],

	illustrator: "Hitoshi Ariga",

	
}

export default card
