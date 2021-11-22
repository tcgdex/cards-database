import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Jumpluff",
		fr: "Cotovol"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		189,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Skiploom",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Powder",
				fr: "Poudre dodo"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leech Seed",
				fr: "Vampigraine"
			},
			effect: {
				en: "If this attack damages the Defending Pokémon (after applying Weakness and Resistance), remove 1 damage counter from Jumpluff, if it has any.",
				fr: "Si cette attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), retirez 1 marqueur de dégâts de Cotovol, s'il en possède."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Une fois qu'il est sous le vent, il contrôle précisément ses spores cotonneuses pour flotter, même autour du monde."
	}
}

export default card
