import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Stunfisk",
		fr: "Limonde",
	},
	illustrator: "sowsow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		618,
	],
	hp: 110,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Raging Thunder",
				fr: "Tonnerre Déchaîné",
			},
			effect: {
				en: "This attack does 10 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à l’un de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electric Trap",
				fr: "Piège Électrique",
			},
			effect: {
				en: "This attack does 30 damage for each of your Pokémon that has any damage counters on it.",
				fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon ayant au moins un marqueur de dégâts.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
