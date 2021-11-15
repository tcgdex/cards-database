import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Seaking",
		fr: "Poissoroy"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		119,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Goldeen",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Arrow",
				fr: "Flèche d'eau"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez un des Pokémon de votre adversaire : cette attaque inflige 20 dégâts à ce Pokémon. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fast Stream",
				fr: "Torrent"
			},
			effect: {
				en: "Move 1 Energy card attached to the Defending Pokémon to the other Defending Pokémon. (Ignore this effect if your opponent has only 1 Defending Pokémon.)",
				fr: "Prenez une carte Énergie attachée au Pokémon Défenseur et attachez-la à l'autre Pokémon Défenseur. (Ne tenez pas compte de cet effet si votre adversaire ne possède qu'un seul Pokémon Défenseur)."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
