import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
		es: "Arcanine",
		it: "Arcanine",
		pt: "Arcanine",
		de: "Arkani"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Searing Flame",
				fr: "Flammes Calcinantes",
				es: "Llama Abrasadora",
				it: "Fiamme Ustionanti",
				pt: "Chama Cauterizante",
				de: "Sengende Flammen"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Firestorm",
				fr: "Orage de Flammes",
				es: "Tormenta de Fuego",
				it: "Tempesta di Fuoco",
				pt: "Tempestade de Fogo",
				de: "Brandsturm"
			},
			effect: {
				en: "Discard 3 Fire Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies Fire de ce Pokémon.",
				es: "Descarta 3 Energías Fire de este Pokémon.",
				it: "Scarta tre Energie Fire assegnate a questo Pokémon.",
				pt: "Descarte 3 Energias Fire deste Pokémon.",
				de: "Lege 3 Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 295330
	}
}

export default card
