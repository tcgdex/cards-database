import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Glameow",
		fr: "Chaglam",
		es: "Glameow",
		it: "Glameow",
		pt: "Glameow",
		de: "Charmian"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		431,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Act Cute",
				fr: "Si Mignon",
				es: "Hacerse el Lindo",
				it: "Furbetto",
				pt: "Atuação Fofa",
				de: "Kokettieren"
			},
			effect: {
				en: "Your opponent puts a card from his or her hand on the bottom of his or her deck.",
				fr: "Votre adversaire place une carte de sa main en dessous de son deck.",
				es: "Tu rival pone 1 carta de su mano en la parte inferior de su baraja.",
				it: "Il tuo avversario prende una carta dalla sua mano e la aggiunge in fondo al suo mazzo.",
				pt: "Seu oponente coloca um card da mão dele(a) no fundo de seu próprio baralho.",
				de: "Dein Gegner legt 1 seiner Handkarten unter sein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 288268
	}
}

export default card
