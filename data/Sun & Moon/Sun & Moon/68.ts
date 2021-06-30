import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Hariyama",
		fr: "Hariyama",
		es: "Hariyama",
		it: "Hariyama",
		pt: "Hariyama",
		de: "Hariyama"
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		297,
	],
	hp: 130,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Makuhita",
		fr: "Makuhita",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Push Out",
				fr: "Expulsion",
				es: "Expulsar",
				it: "Spingi Fuori",
				pt: "Expulsar",
				de: "Verdrängen"
			},
			effect: {
				en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Megaton Slap Push",
				fr: "Grande Claque Titanesque",
				es: "Bofetada Empujón Megatón",
				it: "Spintonata Megatonica",
				pt: "Tapa Empurrão Megaton",
				de: "Megatonnenstoß"
			},

			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
