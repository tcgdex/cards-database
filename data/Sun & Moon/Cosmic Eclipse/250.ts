import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Vileplume-GX",
		fr: "Rafflesia-GX",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		45,
	],
	hp: 240,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},
	stage: "Stage2",
	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fragrant Flower Garden",
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 30 damage from each of your Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Massive Bloom",
				fr: "Jardin Fleuri Parfumé",
			},
			effect: {
				en: "This attack does 10 less damage for each damage counter on this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts à chacun de vos Pokémon.",
			},
			damage: 180,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Allergy Explosion GX",
				fr: "Floraison Massive",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned, Paralyzed, and Poisoned. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Explosion Allergène-GX",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Empoisonné et Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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

	retreat: 2,



}

export default card
