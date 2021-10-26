import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Wishiwashi",
		fr: "Froussardine",
		es: "Wishiwashi",
		it: "Wishiwashi",
		pt: "Wishiwashi",
		de: "Lusardin"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 30,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Deep Sea Swirl",
				fr: "Remous Abyssal",
				es: "Remolino de Alta Mar",
				it: "Vortice Abissale",
				pt: "Giro em Mar Profundo",
				de: "Tiefseewirbel"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 8 cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 8 cartes.",
				es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 8 cartas.",
				it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca otto carte.",
				pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 8 cartas.",
				de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 8 Karten."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
				es: "Chapoteo Ondulante",
				it: "Schizzi d'Onda",
				pt: "Onda Borrifante",
				de: "Wellenplatscher"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Individually, they're incredibly weak. It's by gathering up into schools that they're able to confront opponents."
	}
}

export default card
