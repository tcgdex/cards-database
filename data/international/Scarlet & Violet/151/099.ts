import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [99],
	set: Set,

	name: {
		'fr-fr': "Krabboss",
		'en-us': "Kingler",
		'es-es': "Kingler",
		'it-it': "Kingler",
		'pt-br': "Kingler",
		'de-de': "Kingler"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Krabby",
		'en-us': "Krabby",
		'es-es': "Krabby",
		'it-it': "Krabby",
		'pt-br': "Krabby",
		'de-de': "Krabby"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			'fr-fr': "Marto-Poing",
			'en-us': "Hammer Arm",
			'es-es': "Machada",
			'it-it': "Martelpugno",
			'pt-br': "Braço de Martelo",
			'de-de': "Hammerarm"
		},

		effect: {
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'en-us': "Discard the top card of your opponent's deck.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		damage: 90
	}, {
		cost: ["Water", "Water", "Water", "Water"],

		name: {
			'fr-fr': "Guillotine",
			'en-us': "Guillotine",
			'es-es': "Guillotina",
			'it-it': "Ghigliottina",
			'pt-br': "Guilhotina",
			'de-de': "Guillotine"
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "Its oversized claw is very powerful, but when it's not in battle, the claw just gets in the way.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733694,
				tcgplayer: 516668,
				cardtrader: 261189
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733694,
				tcgplayer: 516668,
				cardtrader: 261189
			}
		},
	],

	illustrator: "Yukiko Baba",

	
}

export default card
