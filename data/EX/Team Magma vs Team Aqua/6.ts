import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Walrein",
		fr: "Kaimorse de Team Aqua"
	},
	illustrator: "Ken Ikuji",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		365,
	],
	hp: 120,
	types: [
		"Water",
		"Darkness",
	],

	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Power Blow",
				fr: "Coup puissant"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Team Aqua's Walrein.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Kaimorse de Team Aqua."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Reverse",
				fr: "Hydro-revers"
			},
			effect: {
				en: "You may return any number of basic Water Energy cards attached to all of your Pokémon to your hand. If you do, this attack does 50 damage plus 10 more damage for each Energy you returned.",
				fr: "Vous pouvez reprendre dans votre main autant de cartes Énergie de base  que vous le voulez. Cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque Énergie reprise."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
