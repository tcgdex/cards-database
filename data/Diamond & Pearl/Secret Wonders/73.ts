import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Venomoth",
		fr: "Aéromite",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		49,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Venonat",
		fr: "Mimitoss",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dangerous Scales",
				fr: "Écailles dangereuses",
			},
			effect: {
				en: "If Venomoth is your Active Pokémon and is damaged by an opponent's attack (even if Venomoth is Knocked Out), the Attacking Pokémon is now Asleep and Poisoned.",
				fr: "Si Aéromite est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Aéromite est mis K.O), le Pokémon Attaquant est maintenant Endormi et Empoisonné.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Disturbance Dive",
				fr: "Plongeon perturbant",
			},
			effect: {
				en: "Prevent all effects of an attack, excluding damage, done to Venomoth during your opponent's next turn.",
				fr: "Prévenez tous les effets d'une attaque, dégâts exclus, infligés à Aéromite lors du prochain tour de votre adversaire.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
