import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Hakamo-o",
		fr: "Écaïd",
		es: "Hakamo-o",
		it: "Hakamo-o",
		pt: "Hakamo-o",
		de: "Mediras"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		783,
	],
	hp: 90,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Noble Roar",
				fr: "Râle Mâle",
				es: "Rugido de Guerra",
				it: "Urlo",
				pt: "Rugido Nobre",
				de: "Kampfgebrüll"
			},
			effect: {
				en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},

		},
		{
			cost: [
				"Fighting",
				"Lightning",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
				es: "Garra Dragón",
				it: "Dragartigli",
				pt: "Garra de Dragão",
				de: "Drachenklaue"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
