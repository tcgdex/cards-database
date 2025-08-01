import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Togetic",
		fr: "Togetic",
		es: "Togetic",
		it: "Togetic",
		pt: "Togetic",
		de: "Togetic"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		176,
	],

	hp: 80,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Togepi",
		fr: "Togepi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Present",
				fr: "Cadeau d’Énergie",
				es: "Obsequio de Energía",
				it: "Regalo Energetico",
				pt: "Energia Presente",
				de: "Energiegeschenk"
			},
			effect: {
				en: "Attach an Energy card from your hand to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie de votre main à l’un de vos Pokémon de Banc.",
				es: "Une 1 carta de Energía de tu mano a 1 de tus Pokémon en Banca.",
				it: "Assegna una carta Energia dalla tua mano a uno dei tuoi Pokémon panchina.",
				pt: "Ligue 1 carta de Energia da sua mão a 1 dos seus Pokémon no Banco.",
				de: "Lege 1 Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank an."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Magical Shot",
				fr: "Coup Magique",
				es: "Disparo Mágico",
				it: "Magicolpo",
				pt: "Tiro Mágico",
				de: "Magischer Schuss"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372424
	}
}

export default card
