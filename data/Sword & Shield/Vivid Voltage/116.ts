import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [374],

	name: {
		en: "Beldum",
		fr: "Terhal",
		es: "Beldum",
		it: "Beldum",
		pt: "Beldum",
		de: "Tanhel"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Metal",
	],

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la Famille",
				es: "Llamar a la Familia",
				it: "Cerca Famiglia",
				pt: "Chamar a Família",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "If you anger it, it will do more than rampage. It will also burst out strong magnetism, causing nearby machines to break."
	},

	thirdParty: {
		cardmarket: 512290,
		tcgplayer: 226570
	}
}

export default card
