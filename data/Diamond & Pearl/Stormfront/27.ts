import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Staraptor",
		fr: "Etouraptor"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		398,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Staravia",
		fr: "Etourvol",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Protect Wing",
				fr: "Aile protectrice",
			},
			effect: {
				en: "As long as Staraptor is your Active Pokémon, any damage done by attacks from your opponent's Stage 2 Evolved Pokémon is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tant qu'Étouraptor est votre Pokémon Actif, tous dégâts infligés par des attaques de Pokémon Évolués de Niveau 2 de votre adversaire sont réduits de 20 (Après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Strong Breeze",
				fr: "Forte brise",
			},
			effect: {
				en: "Flip a coin. If heads, put 1 of your opponent's Benched Pokémon and all cards attached to it on top of your opponent's deck. Your opponent shuffles his or her deck afterward.",
				fr: "Lancez une pièce. Si c'est face, placez 1 des Pokémon de Banc de votre adversaire ainsi que toutes les cartes qui lui sont attachées au dessus de son deck. Ensuite, votre adversaire mélange son deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Clutch",
				fr: "Serre",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
