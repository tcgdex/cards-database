import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [249],

	name: {
		'en-us': "Lugia",
		'fr-fr': "Lugia",
		'es-es': "Lugia",
		'it-it': "Lugia",
		'pt-br': "Lugia",
		'de-de': "Lugia"
	},

	illustrator: "NC Empire",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'es-es': "Tornado",
				'it-it': "Raffica",
				'pt-br': "Lufada de Vento",
				'de-de': "Windstoß"
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wind Pressure",
				'fr-fr': "Pression Éolienne",
				'es-es': "Presión Eólica",
				'it-it': "Pressione Ventosa",
				'pt-br': "Pressão do Vento",
				'de-de': "Winddruck"
			},
			effect: {
				'en-us': "If your opponent has 5 or fewer cards in their hand, this attack does nothing.",
				'fr-fr': "Si votre adversaire a 5 cartes ou moins dans sa main, cette attaque ne fait rien.",
				'es-es': "Si tu rival tiene 5 o menos cartas en su mano, este ataque no hace nada.",
				'it-it': "Se il tuo avversario ha cinque o meno carte in mano, questo attacco non ha effetto.",
				'pt-br': "Se o seu oponente tiver 5 ou menos cartas na própria mão, este ataque não fará nada.",
				'de-de': "Wenn dein Gegner 5 oder weniger Karten auf seiner Hand hat, hat diese Attacke keine Auswirkungen."
			},
			damage: 250,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 512370,
				tcgplayer: 226588
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512370,
				tcgplayer: 226588
			}
		},
	],
}

export default card
