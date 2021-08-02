import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Barbaracle",
		fr: "Golgopathe",
		es: "Barbaracle",
		it: "Barbaracle",
		pt: "Barbaracle",
		de: "Thanathora"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Binacle",
		fr: "Opermine"
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Hurl",
				fr: "Lance-Pierre",
				es: "Lanzamiento de Rocas",
				it: "Scaglia Pietre",
				pt: "Lançamento de Pedras",
				de: "Steinschleuderer"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
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
				en: "Hand Press",
				fr: "Pression des Mains",
				es: "Presión de Manos",
				it: "Pressopacca",
				pt: "Aperto de Mão",
				de: "Händedruck"
			},
			effect: {
				en: "If you have more cards in your hand than your opponent, this attack does 80 more damage.",
				fr: "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si tienes más cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
				it: "Se hai più carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
				pt: "Se você tiver mais cartas na sua mão do que seu oponente, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn du mehr Karten auf der Hand hast als dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
