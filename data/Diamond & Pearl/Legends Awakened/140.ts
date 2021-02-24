import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Azelf",
		fr: "Créfadet",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		482,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Psychic Aura",
				fr: "Aura psy",
			},
			effect: {
				en: "Each of your Psychic Pokémon has no Weakness.",
				fr: "Chacun de vos Pokémon Psychic ne possède pas de Faiblesse.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Deep Balance",
				fr: "Bon équilibre",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. Put 1 damage counter on that Pokémon for each Energy attached to all of your opponent's Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Placez 1 marqueur de dégât sur ce Pokémon pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
