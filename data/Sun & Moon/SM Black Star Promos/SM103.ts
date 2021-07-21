import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Lunala-GX",
		fr: "Lunala-GX",
		es: "Lunala-GX",
		it: "Lunala-GX",
		pt: "Lunala-GX",
		de: "Lunala-GX"
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		792,
	],

	hp: 230,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	stage: "Stage2",
	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Glide",
				fr: "Glissement",
				es: "Planeo",
				it: "Aliante",
				pt: "Planeio",
				de: "Gleiten"
			},

			damage: 50,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lunar Javelin",
				fr: "Javelot Lunaire",
				es: "Lanza Lunar",
				it: "Giavellotto Lunare",
				pt: "Dardo Lunar",
				de: "Lunarspeer"
			},
			effect: {
				en: "Discard 2 Psychic Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies Psychic de ce Pokémon.",
				es: "Descarta 2 Energías Psychic de este Pokémon.",
				it: "Scarta due Energie Psychic assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias Psychic deste Pokémon.",
				de: "Lege 2 Psychic-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 200,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Requiem GX",
				fr: "Requiem GX",
				es: "Réquiem GX",
				it: "Requiem GX",
				pt: "Réquiem GX",
				de: "Requiem GX"
			},
			effect: {
				en: "(You can’t use more than 1 GX attack in a game.)",
				fr: "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "(No puedes usar más de 1 ataque GX en una partida).",
				it: "Non puoi usare più di un attacco GX a partita.",
				pt: "(Você não pode usar mais de 1 ataque GX por partida.)",
				de: "(Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 250,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0
}

export default card
