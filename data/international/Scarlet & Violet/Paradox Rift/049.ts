import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [768],
	set: Set,

	name: {
		'en-us': "Golisopod",
		'fr-fr': "Sarmuraï",
		'es-es': "Golisopod",
		'it-it': "Golisopod",
		'pt-br': "Golisopod",
		'de-de': "Tectass"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Wimpod",
		'fr-fr': "Sovkipou",
		'es-es': "Wimpod",
		'it-it': "Wimpod",
		'pt-br': "Wimpod",
		'de-de': "Reißlaus"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Powerful Cross",
			'fr-fr': "Poing Puissant",
			'es-es': "Cruzado Poderoso",
			'it-it': "Fendente Potente",
			'pt-br': "Cruzado Poderoso",
			'de-de': "Krafthaken"
		},

		effect: {
			'en-us': "This attack does 20 damage for each card in your opponent's hand.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque carte dans la main de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño por cada carta en la mano de tu rival.",
			'it-it': "Questo attacco infligge 20 danni per ogni carta nella mano del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada carta na mão do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Karte auf der Hand deines Gegners 20 Schadenspunkte zu."
		},

		damage: "20×"
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Waterfall",
			'fr-fr': "Cascade",
			'es-es': "Cascada",
			'it-it': "Cascata",
			'pt-br': "Cachoeira",
			'de-de': "Kaskade"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "They live in sunken ships or in holes in the seabed. When Golisopod and Grapploct battle, the loser becomes the winner's meal.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740532,
				tcgplayer: 523659,
				cardtrader: 265117
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740532,
				tcgplayer: 523659,
				cardtrader: 265117
			}
		},
	],

	illustrator: "nagimiso",

	
}

export default card
