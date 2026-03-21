import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		de: "Pummeluff"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		39,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Doubleslap",
				fr: "Torgnoles",
				de: "Doubleslap"
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
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rest",
				fr: "Repos",
				de: "Rest"
			},
			effect: {
				en: "Remove all Special Conditions and 3 damage counters from Jigglypuff (all if there are less than 3). Jigglypuff is now Asleep.",
				fr: "Retirez à Rondoudou tous ses États Spéciaux ainsi que 3 marqueurs de dégât (si Rondoudou a moins de dégâts que cela, retirez-les lui tous). Rondoudou est maintenant Endormi.",
				de: "Remove all Special Conditions and 3 damage counters from Jigglypuff (all if there are less than 3). Jigglypuff is now Asleep."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276018,
		tcgplayer: 86314
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
