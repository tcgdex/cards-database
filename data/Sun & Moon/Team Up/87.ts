import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Mightyena",
		fr: "Grahyèna",
		es: "Mightyena",
		it: "Mightyena",
		pt: "Mightyena",
		de: "Magnayen"
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		262,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Poochyena",
		fr: "Medhyèna",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Fang",
				fr: "Croc Obscurité",
				es: "Colmillo Siniestro",
				it: "Zanna Oscura",
				pt: "Presa da Escuridão",
				de: "Finsterzahn"
			},
			effect: {
				en: "Discard a random card from your opponent’s hand.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire.",
				es: "Descarta 1 carta aleatoria de la mano de tu rival.",
				it: "Scarta una carta a caso dalla mano del tuo avversario.",
				pt: "Descarte 1 carta aleatória da mão do seu oponente.",
				de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
