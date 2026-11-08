import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
		'es-es': "Fletchling",
		'it-it': "Fletchling",
		'pt-br': "Fletchling",
		'de-de': "Dartiri"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "Sumiyoshi Kizuki",

	attacks: [{
		name: {
			'en-us': "Tailwind Draw",
			'fr-fr': "Pioche en Poupe",
			'es-es': "Robo de Viento Afín",
			'it-it': "Pescata Ventoincoda",
			'pt-br': "Tailwind Draw",
			'de-de': "Rückenwindzug"
		},

		effect: {
			'en-us': "Draw a card. If you go second and it's your first turn, draw 3 more cards.",
			'fr-fr': "Piochez une carte. Si vous jouez en second et que c'est votre premier tour, piochez 3 cartes supplémentaires.",
			'es-es': "Roba 1 carta. Si sales segundo y es tu primer turno, roba 3 cartas más.",
			'it-it': "Pesca una carta. Se inizi per secondo ed è il tuo primo turno, pesca altre tre carte.",
			'pt-br': "Draw a card. If you go second and it's your first turn, draw 3 more cards.",
			'de-de': "Ziehe 1 Karte. Wenn du als Zweiter am Zug bist und es dein erster Zug ist, ziehe 3 Karten mehr."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Surprise Attack",
			'fr-fr': "Attaque Surprise",
			'es-es': "Ataque Sorpresa",
			'it-it': "Attacco a Sorpresa",
			'pt-br': "Surprise Attack",
			'de-de': "Überraschungsangriff"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Flip a coin. If tails, this attack does nothing.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	dexId: [661],

	description: {
		'en-us': "Its body is always warm. Trainers who live in cold areas apparently sleep with it in their bed."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574196,
				tcgplayer: 246879
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574196,
				tcgplayer: 246879
			}
		},
	],
}

export default card
