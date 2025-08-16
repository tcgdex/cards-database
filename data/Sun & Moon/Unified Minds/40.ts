import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Lumineon",
		fr: "Luminéon",
		es: "Lumineon",
		it: "Lumineon",
		pt: "Lumineon",
		de: "Lumineon"
	},

	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		457,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Finneon",
		fr: "Écayon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Neon Trickery",
				fr: "Supercherie Néon",
				es: "Truco Neón",
				it: "Neon Birichino",
				pt: "Truques Neon",
				de: "Neontrickserei"
			},
			effect: {
				en: "You may move an Energy from your opponent’s Active Pokémon to 1 of their Benched Pokémon.",
				fr: "Vous pouvez déplacer une Énergie du Pokémon Actif de votre adversaire vers l’un de ses Pokémon de Banc.",
				es: "Puedes mover 1 Energía del Pokémon Activo de tu rival a 1 de sus Pokémon en Banca.",
				it: "Puoi spostare un’Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
				pt: "Você pode mover 1 Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele(a).",
				de: "Du kannst 1 Energie vom Aktiven Pokémon deines Gegners auf 1 Pokémon auf seiner Bank verschieben."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 388027,
		tcgplayer: 194961
	}
}

export default card
