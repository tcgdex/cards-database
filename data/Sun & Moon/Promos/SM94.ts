import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Wash Rotom",
		fr: "Motisma Lavage",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		479,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Roto Motor",
				fr: "Moti-Moteur",
			},
			effect: {
				en: "If you have 9 or more Pokémon Tool cards in your discard pile, ignore all Energy in the attack cost of each of this Pokémon's attacks.",
				fr: "Si vous avez 9 cartes Outil Pokémon ou plus dans votre pile de défausse, ignorez toutes les Énergies dans le coût d’attaque de chacune des attaques de ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wash Arrow",
				fr: "Flèche de Lavage",
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
