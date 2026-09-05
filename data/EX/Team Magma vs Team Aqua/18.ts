import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Sharpedo",
		fr: "Sharpedo de Team Aqua",
		de: "Team Aquas Tohaido"
	},

	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [319],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slow-Acting Poison",
				fr: "Poison à effet retardé",
				de: "Verzögertes Gift"
			},
			effect: {
				en: "At the end of your opponent's next turn, the Defending Pokémon is now Poisoned.",
				fr: "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur est Empoisonné.",
				de: "Nach dem nächsten Zug deines Gegner ist das Verteidigende Pokémon vergiftet."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Smash",
				fr: "Aqua-choc",
				de: "Aqua Zertrümmerer"
			},
			effect: {
				en: "If the Defending Pokémon is affected by a Special Condition, this attack does 50 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275795,
				tcgplayer: 89800
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275795,
				tcgplayer: 89800
			}
		},
	],

}

export default card
