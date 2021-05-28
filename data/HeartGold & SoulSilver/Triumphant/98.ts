import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Yanmega",
		fr: "Yanmega",
	},
	illustrator: "Noriko Hotta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		469,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Yanma",
		fr: "Yanma",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Insight",
				fr: "Point de vue",
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent the attack cost of each of Yanmega's attacks is 0.",
				fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, le coût de chaque attaque de Yanmega est de 0.",
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
				en: "Linear Attack",
				fr: "Attaque linéaire",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez l'un des Pokémon de votre adversaire. Cette attaque inflige 40 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sonicboom",
				fr: "Sonicboom",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
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
