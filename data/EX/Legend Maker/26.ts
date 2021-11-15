import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Spinda",
		fr: "Spinda"
	},
	illustrator: "Motofumi Fujiwara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		327,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Pattern Distraction",
				fr: "Distra-style"
			},
			effect: {
				en: "As long as Spinda is your Active Pokémon, whenever your opponent's Basic Pokémon tries to attack, your opponent flips a coin. If tails, that attack does nothing. You can't use more than 1 Pattern Distraction Poké-Body each turn.",
				fr: "Tant que Spinda est votre Pokémon Actif, lorsque les Pokémon de base de votre adversaire essayent d'attaquer, votre adversaire lance une pièce. Si c'est pile, cette attaque est sans effet. Vous ne pouvez pas utiliser plus d'1 Poké-Body Distra-style par tour."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Whimsy Draw",
				fr: "Pioche bizzarre"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, draw 2 cards.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, piochez 2 cartes."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès"
			},
			effect: {
				en: "Flip a coin. If tails, Spinda does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Spinda s'inflige 10 dégâts."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
