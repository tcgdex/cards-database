import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Sunflora",
		fr: "Heliatronc"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		192,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Sunkern",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Dazzle Dance",
				fr: "Danse éblouissante"
			},
			effect: {
				en: "Each Defending Pokémon is now Confused.",
				fr: "Chaque Pokémon Défenseur est maintenant Confus."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Green Blast",
				fr: "Explosion verte"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Grass Energy attached to all of your Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à tous vos Pokémon."
			},
			damage: "20+",

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
			type: "Water",
			value: "-30"
		},
	],




}

export default card
