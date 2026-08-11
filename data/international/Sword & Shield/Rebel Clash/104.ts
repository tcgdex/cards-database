import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [689],

	name: {
		'en-us': "Barbaracle",
		'fr-fr': "Golgopathe",
		'es-es': "Barbaracle",
		'it-it': "Barbaracle",
		'pt-br': "Barbaracle",
		'de-de': "Thanathora"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Binacle",
		'fr-fr': "Opermine",
		'es-es': "Binacle",
		'it-it': "Binacle",
		'pt-br': "Binacle",
		'de-de': "Bithora"
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Hurl",
				'fr-fr': "Lance-Pierre",
				'es-es': "Lanzamiento de Rocas",
				'it-it': "Scaglia Pietre",
				'pt-br': "Lançamento de Pedras",
				'de-de': "Steinschleuderer"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hand Press",
				'fr-fr': "Pression des Mains",
				'es-es': "Presión de Manos",
				'it-it': "Pressopacca",
				'pt-br': "Aperto de Mão",
				'de-de': "Händedruck"
			},
			effect: {
				'en-us': "If you have more cards in your hand than your opponent, this attack does 80 more damage.",
				'fr-fr': "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si tienes más cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
				'it-it': "Se hai più carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
				'pt-br': "Se você tiver mais cartas na sua mão do que seu oponente, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn du mehr Karten auf der Hand hast als dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 120,
	types: ["Fighting"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Seven Binacle come together to form one Barbaracle. The Binacle that serves as the head gives orders to those serving as the limbs."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457933,
				tcgplayer: 213192
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457933,
				tcgplayer: 213192
			}
		},
	],
}

export default card
