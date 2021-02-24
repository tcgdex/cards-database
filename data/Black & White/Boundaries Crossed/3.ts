import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
	},
	illustrator: "Shin Nagasawa",
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
				en: "Allergy Panic",
				fr: "Panique Allergique",
			},
			effect: {
				en: "Apply Weakness for each Pokémon (both yours and your opponent's) as ×4 instead.",
				fr: "Appliquez une Faiblesse de x4 à chacun des Pokémon (les vôtres et ceux de votre adversaire).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pollen Spray",
				fr: "Crache-Pollen",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
