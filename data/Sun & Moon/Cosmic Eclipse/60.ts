import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Swanna",
		fr: "Lakmécygne",
		es: "Swanna",
		it: "Swanna",
		pt: "Swanna",
		de: "Swaroness"
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		581,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Ducklett",
		fr: "Couaneton",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tailwind",
				fr: "Vent Arrière",
				es: "Viento Afín",
				it: "Ventoincoda",
				pt: "Vento de Cauda",
				de: "Rückenwind"
			},
			effect: {
				en: "Attach an Energy card from your hand to 1 of your Pokémon.",
				fr: "Attachez une carte Énergie de votre main à l’un de vos Pokémon.",
				es: "Une 1 carta de Energía de tu mano a 1 de tus Pokémon.",
				it: "Assegna una carta Energia dalla tua mano a uno dei tuoi Pokémon.",
				pt: "Ligue 1 carta de Energia da sua mão a 1 dos seus Pokémon.",
				de: "Lege 1 Energiekarte aus deiner Hand an 1 deiner Pokémon an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Slash",
				fr: "Lame d’Air",
				es: "Tajo Aéreo",
				it: "Eterelama",
				pt: "Golpe de Ar",
				de: "Luftschnitt"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un’Energia assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 70,

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



}

export default card
