import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		es: "Exeggcute",
		it: "Exeggcute",
		pt: "Exeggcute",
		de: "Owei"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		102,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Loathe",
				fr: "Dégoût",
				es: "Desdén",
				it: "Avversione",
				pt: "Abominar",
				de: "Abscheu"
			},
			effect: {
				en: "Flip a coin. If heads, switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Lancez une pièce. Si c'est face, échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "Lanza 1 moneda. Si sale cara, cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Lancia una moneta. Se esce testa, scambia questo Pokémon con uno della tua panchina.",
				pt: "Jogue uma moeda. Se sair cara, troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Wirf 1 Münze. Tausche bei \"Kopf\" dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
