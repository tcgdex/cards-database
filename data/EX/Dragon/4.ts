import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libegon"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vibrava",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
			],
			name: {
				en: "Energy Shower",
				fr: "Averse d'énergie"
			},
			effect: {
				en: "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like.",
				fr: "Choisissez dans votre main autant de cartes Énergie de base que vous le voulez et attachez-les à vos Pokémon de la façon que vous voulez."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rainbow Burn",
				fr: "Brûlure arcenciel"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each type of basic Energy card attached to Flygon.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque type de carte Énergie de base attaché à Libegon."
			},
			damage: "30+",

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
			type: "Fire",
			value: "-30"
		},
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
