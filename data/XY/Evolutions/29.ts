import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Dewgong",
		fr: "Lamantine",
		es: "Dewgong",
		it: "Dewgong",
		pt: "Dewgong",
		de: "Jugong"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		87,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seel",
		fr: "Otaria",
		es: "Seel",
		it: "Seel",
		pt: "Seel",
		de: "Jurob"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Super Deep Dive",
				fr: "Super Gros Plongeon",
				es: "Superzambullida Submarina",
				it: "Super Immersione",
				pt: "Mergulho Super Profundo",
				de: "Super Tieftaucher"
			},
			effect: {
				en: "Heal 40 damage from this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Soignez 40 dégâts à ce Pokémon. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "Cura 40 puntos de daño a este Pokémon. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Cura questo Pokémon da 40 danni. Scambia questo Pokémon con uno della tua panchina.",
				pt: "Cure 40 de danos deste Pokémon. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Heile 40 Schadenspunkte bei diesem Pokémon. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				es: "Derribo",
				it: "Riduttore",
				pt: "Desmantelar",
				de: "Bodycheck"
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s'inflige 20 dégâts.",
				es: "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 20 danni a se stesso.",
				pt: "Este Pokémon causa 20 danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
