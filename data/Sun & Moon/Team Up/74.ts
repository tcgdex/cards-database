import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
		es: "Hitmonchan",
		it: "Hitmonchan",
		pt: "Hitmonchan",
		de: "Nockchan"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Hit and Run",
				fr: "Frappe et Fuite",
				es: "Atropello y Fuga",
				it: "Colpisci e Fuggi",
				pt: "Bater e Fugir",
				de: "Fluchtschlag"
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
				es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
				pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnum Punch",
				fr: "Poing Magnum",
				es: "Puño Magnum",
				it: "Superpugno",
				pt: "Soco Magnum",
				de: "Magnum-Schlag"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 369004,
		tcgplayer: 183852
	}
}

export default card
