import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Dugtrio",
		fr: "Triopikeur"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		51,
	],
	hp: 70,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Diglett",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sand Veil",
				fr: "Voile ensablant"
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon by your opponent's attacks.",
				fr: "Prévenez tous les dégâts infligés à vos Pokémon de Banc par les attaques de votre adversaire."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Dig Under",
				fr: "Terrassement"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Les dégâts ne sont pas affectés par la Faiblesse et la Résistance."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès"
			},
			effect: {
				en: "Dugtrio does 10 damage to itself.",
				fr: "Triopikeur s'inflige 10 dégâts."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
