import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
	},
	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		45,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Disgusting Pollen",
				fr: "Pollen Dégoûtant",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent's Basic Pokémon can't attack.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les Pokémon de base de votre adversaire ne peuvent pas attaquer.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Downer Shock",
				fr: "Choc Immobilisateur",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep. If tails, your opponent's Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
