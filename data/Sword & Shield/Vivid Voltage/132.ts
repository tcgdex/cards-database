import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [249],
	name: {
		en: "Lugia",
		fr: "Lugia",
		es: "Lugia",
		it: "Lugia",
		pt: "Lugia",
		de: "Lugia"
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
				en: "Gust",
				fr: "Tornade",
				es: "Tornado",
				it: "Raffica",
				pt: "Lufada de Vento",
				de: "Windstoß"
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
				en: "Wind Pressure",
				fr: "Pression Éolienne",
				es: "Presión Eólica",
				it: "Pressione Ventosa",
				pt: "Pressão do Vento",
				de: "Winddruck"
			},
			effect: {
				en: "If your opponent has 5 or fewer cards in their hand, this attack does nothing.",
				fr: "Si votre adversaire a 5 cartes ou moins dans sa main, cette attaque ne fait rien.",
				es: "Si tu rival tiene 5 o menos cartas en su mano, este ataque no hace nada.",
				it: "Se il tuo avversario ha cinque o meno carte in mano, questo attacco non ha effetto.",
				pt: "Se o seu oponente tiver 5 ou menos cartas na própria mão, este ataque não fará nada.",
				de: "Wenn dein Gegner 5 oder weniger Karten auf seiner Hand hat, hat diese Attacke keine Auswirkungen."
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

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm."
	}
}

export default card
