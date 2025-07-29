import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Mankey",
		fr: "Férosinge",
		es: "Mankey",
		it: "Mankey",
		pt: "Mankey",
		de: "Menki"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		56,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scout",
				fr: "Espionnage",
				es: "Explorar",
				it: "Esplorazione",
				pt: "Explorador",
				de: "Späher"
			},
			effect: {
				en: "Your opponent reveals their hand.",
				fr: "Votre adversaire dévoile sa main.",
				es: "Tu rival enseña las cartas de su mano.",
				it: "Il tuo avversario mostra le carte che ha in mano.",
				pt: "Seu oponente revela a própria mão.",
				de: "Dein Gegner zeigt dir seine Handkarten."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
				es: "Patada Baja",
				it: "Colpo Basso",
				pt: "Rasteira",
				de: "Fußkick"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 369001
	}
}

export default card
