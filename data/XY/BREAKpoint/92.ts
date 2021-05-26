import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Ho-Oh-EX",
		fr: "Ho-Oh-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 180,
	types: [
		"Colorless",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Purifying Fire",
				fr: "Feu Purifiant",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon has any basic Fire Energy attached to it, you may heal 50 damage from it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si de l'Énergie Fire de base est attachée à ce Pokémon, vous pouvez soigner 50 dégâts à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Water",
				"Lightning",
			],
			name: {
				en: "Elemental Feather",
				fr: "Plume Élémentaire",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
