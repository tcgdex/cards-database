import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Galvantula",
		fr: "Mygavolt",
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		596,
	],
	hp: 90,
	types: [
		"Lightning",
		"Grass",
	],
	evolveFrom: {
		en: "Joltik",
		fr: "Statitik",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Thread",
				fr: "Double Fil",
			},
			effect: {
				en: "This attack does 30 damage to 2 of your opponent’s Pokémon. Also apply Weakness and Resistance for Benched Pokémon.",
				fr: "Cette attaque inflige 30 dégâts à 2 des Pokémon de votre adversaire. Appliquez aussi la Faiblesse et la Résistance aux Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electroweb",
				fr: "Toile Élek",
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
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
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
