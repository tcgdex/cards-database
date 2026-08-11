import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Lunala GX",
		'fr-fr': "Lunala GX",
		'es-es': "Lunala GX",
		'it-it': "Lunala GX",
		'pt-br': "Lunala GX",
		'de-de': "Lunala GX"
	},

	illustrator: "PLANETA",
	rarity: "Promo",
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
		'en-us': "Cosmoem",
		'fr-fr': "Cosmovum",
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
				'en-us': "Glide",
				'fr-fr': "Glissement",
				'es-es': "Planeo",
				'it-it': "Aliante",
				'pt-br': "Planeio",
				'de-de': "Gleiten"
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
				'en-us': "Lunar Javelin",
				'fr-fr': "Javelot Lunaire",
				'es-es': "Lanza Lunar",
				'it-it': "Giavellotto Lunare",
				'pt-br': "Dardo Lunar",
				'de-de': "Lunarspeer"
			},
			effect: {
				'en-us': "Discard 2 Psychic Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies Psychic de ce Pokémon.",
				'es-es': "Descarta 2 Energías Psychic de este Pokémon.",
				'it-it': "Scarta due Energie Psychic assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias Psychic deste Pokémon.",
				'de-de': "Lege 2 Psychic-Energien von diesem Pokémon auf deinen Ablagestapel."
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
				'en-us': "Requiem GX",
				'fr-fr': "Requiem GX",
				'es-es': "Réquiem GX",
				'it-it': "Requiem GX",
				'pt-br': "Réquiem GX",
				'de-de': "Requiem GX"
			},
			effect: {
				'en-us': "(You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "(No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Non puoi usare più di un attacco GX a partita.",
				'pt-br': "(Você não pode usar mais de 1 ataque GX por partida.)",
				'de-de': "(Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	retreat: 0,
}

export default card
