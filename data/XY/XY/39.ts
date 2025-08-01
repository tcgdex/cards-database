import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Froakie",
		fr: "Grenousse",
		es: "Froakie",
		it: "Froakie",
		pt: "Froakie",
		de: "Froxy"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		656,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bounce",
				fr: "Rebond",
				es: "Bote",
				it: "Rimbalzo",
				pt: "Ricochete",
				de: "Sprungfeder"
			},
			effect: {
				en: "Flip a coin. If heads, switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Lancez une pièce. Si c'est face, échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "Lanza 1 moneda. Si sale cara, cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Lancia una moneta. Se esce testa, scambia questo Pokémon con uno della tua panchina.",
				pt: "Jogue uma moeda. Se sair cara, troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Wirf 1 Münze. Tausche bei \"Kopf\" dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 10,

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
		cardmarket: 281376
	}
}

export default card
