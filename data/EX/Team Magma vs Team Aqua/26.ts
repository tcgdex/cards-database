import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Corphish",
		fr: "Écrapince de Team Aqua",
		de: "Team Aquas Krebscorps"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		341,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Pinchers",
				fr: "Doubles pinces",
				de: "Double Pinchers"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Poison",
				fr: "Sombre poison",
				de: "Dark Poison"
			},
			effect: {
				en: "Discard a basic Energy card attached to Team Aqua's Corphish or this attack does nothing. The Defending Pokémon is now Poisoned.",
				fr: "Défaussez une carte Énergie de base attachée à Écrapince de Team Aqua ou cette attaque est sans effet. Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Discard a basic Energy card attached to Team Aqua's Corphish or this attack does nothing. The Defending Pokémon is now Poisoned."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276003,
		tcgplayer: 89780
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
