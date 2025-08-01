import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Hoothoot",
		fr: "Hoothoot",
		es: "Hoothoot",
		it: "Hoothoot",
		pt: "Hoothoot",
		de: "Hoothoot"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		163,
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
				en: "See Through",
				fr: "Main Transparente",
				es: "Transparencia",
				it: "Sbirciatina",
				pt: "Transparência",
				de: "Durchblick"
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
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				es: "Picotazo",
				it: "Beccata",
				pt: "Bicada",
				de: "Schnabel"
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

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 299507
	}
}

export default card
