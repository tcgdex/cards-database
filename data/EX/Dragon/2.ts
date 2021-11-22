import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Altaria",
		fr: "Altaria"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		334,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Swablu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dragon Dance",
				fr: "Danse de dragon"
			},
			effect: {
				en: "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, the attack does 40 more damage (before applying Weakness and Resistance).",
				fr: "Lors de votre prochain tour, si un de vos Pokémon Actifs inflige des dégâts à un des Pokémon Défenseurs, cette attaque inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance)."
			},

		},
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				en: "Dragon Song",
				fr: "Chanson de dragon"
			},
			effect: {
				en: "Each Defending Pokémon is now Asleep.",
				fr: "Chaque Pokémon Défenseur est maintenant Endormi."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
