import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Pheromosa & Buzzwole-GX",
		fr: "Cancrelove et Mouscoto-GX",
	},
	illustrator: "kirisAki",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		794,
	],
	hp: 260,
	types: [
		"Grass",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Jet Punch",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Elegant Sole",
				fr: "Coup Rapide",
			},
			effect: {
				en: "During your next turn, this Pokémon's Elegant Sole attack's base damage is 60.",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 190,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Beast Game-GX",
				fr: "Semelle Élégante",
			},
			effect: {
				en: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card. If this Pokémon has at least 7 extra Energy attached to it (in addition to this attack's cost), take 3 more Prize cards instead. (You can't use more than 1 GX attack in a game.)",
				fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Semelle Élégante de ce Pokémon sont de 60.",
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Jeu Chimérique-GX",
			},
			effect: {
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire. Si au moins 7 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), récupérez 3 cartes Récompense supplémentaires au lieu d’une. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
