import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Rockruff",
		fr: "Rocabot",
		es: "Rockruff",
		it: "Rockruff",
		pt: "Rockruff",
		de: "Wuffels"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		744,
	],

	hp: 60,

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
				en: "Roar",
				fr: "Hurlement",
				es: "Rugido",
				it: "Boato",
				pt: "Rugido",
				de: "Brüller"
			},
			effect: {
				en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
				pt: "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-Pierres",
				es: "Lanzarrocas",
				it: "Sassata",
				pt: "Lançamento de Rocha",
				de: "Steinwurf"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 408264
	}
}

export default card
