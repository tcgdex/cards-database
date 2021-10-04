import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Steenee",
		fr: "Candine",
		es: "Steenee",
		it: "Steenee",
		pt: "Steenee",
		de: "Frubaila"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Bounsweet",
		fr: "Croquine",
		es: "Bounsweet",
		it: "Bounsweet",
		pt: "Bounsweet",
		de: "Frubberl"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Captivate",
				fr: "Séduction",
				es: "Seducción",
				it: "Incanto",
				pt: "Cativar",
				de: "Liebreiz"
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Smack",
				fr: "Claque",
				es: "Palmetazo",
				it: "Schiaffo",
				pt: "Estalo",
				de: "Klatscher"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "As it twirls like a dancer, a sweet smell spreads out around it. Anyone who inhales the scent will feel a surge of happiness."
	}
}

export default card
