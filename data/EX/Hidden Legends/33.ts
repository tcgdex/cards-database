import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Dodrio",
		fr: "Dodrio",
		de: "Dodri"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		85,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Doduo",
		fr: "Doduo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fast Feet",
				fr: "Fugafacile",
				de: "Fast Feet"
			},
			effect: {
				en: "Dodrio can retreat even when it is Asleep or Paralyzed.",
				fr: "Dodrio peut battre en retraite même s'il est Endormi ou Paralysé.",
				de: "Dodrio can retreat even when it is Asleep or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Retaliate",
				fr: "Représailles",
				de: "Retaliate"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Dodrio.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Dodrio.",
				de: "Does 10 damage times the number of damage counters on Dodrio."
			},
			damage: "10x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup déchirant",
				de: "Slashing Strike"
			},
			effect: {
				en: "Flip a coin. If tails, Dodrio can't use Slashing Strike during your next turn.",
				fr: "Lancez une pièce. Si c'est pile, Dodrio ne peut pas utiliser Coup déchirant lors de votre prochain tour.",
				de: "Flip a coin. If tails, Dodrio can't use Slashing Strike during your next turn."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276107,
		tcgplayer: 84849
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
