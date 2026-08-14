import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Walrein",
		fr: "Kaimorse de Team Aqua",
		de: "Team Aquas Walraisa"
	},

	illustrator: "Ken Ikuji",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [365],

	hp: 120,

	types: [
		"Water",
		"Darkness"
	],

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Power Blow",
				fr: "Coup puissant",
				de: "Mächtiger Schlag"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Team Aqua's Walrein.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Kaimorse de Team Aqua.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Team Aquas Walraisa angelegte Energie zu."
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
				fr: "Hydro-revers",
				de: "Gegenwelle"
			},
			effect: {
				en: "You may return any number of basic Water Energy cards attached to all of your Pokémon to your hand. If you do, this attack does 50 damage plus 10 more damage for each Energy you returned.",
				fr: "Vous pouvez reprendre dans votre main autant de cartes Énergie de base  que vous le voulez. Cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque Énergie reprise.",
				de: "Du kannst beliebig viele an deine Pokémon angelegte {W}-Basis-Energiekarten zurück auf die Hand nehmen. Wenn du das machst, fügt dieser Angriff 50 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf diese Weise zurück genommene Energie zu."
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


	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275783,
				tcgplayer: 89803
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275783,
				tcgplayer: 89803
			}
		},
	],

}

export default card
