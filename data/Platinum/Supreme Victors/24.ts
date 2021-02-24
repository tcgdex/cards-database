import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Dewgong",
		fr: "Lamantine",
	},
	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		87,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seel",
		fr: "Otaria",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Thick Fat",
				fr: "Isograisse",
			},
			effect: {
				en: "Any damage done to Dewgong by attacks from Fire Pokémon and Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à Lamantine par des attaques de Pokémon Fire et Water sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Shard",
				fr: "Éclats glace",
			},
			effect: {
				en: "If the Defending Pokémon is a Fighting Pokémon, this attack's base damage is 80 instead of 30.",
				fr: "Si le Pokémon Défenseur est un Pokémon Fighting, les dégâts de base de cette attaque sont de 80 au lieu de 30.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde boréale",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	retreat: 3,



}

export default card
