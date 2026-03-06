import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Rayquaza ex",
		fr: "Rayquaza ex",
		de: "Rayquaza ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spiral Growth",
				fr: "Croissance en spirale",
				de: "Spiral Growth"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, search your discard pile for a basic Energy card and attach it to Rayquaza ex.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, cherchez dans votre deck une carte Énergie de base et attachez-la à Rayquaza ex.",
				de: "Flip a coin until you get tails. For each heads, search your descard pile for a Energy card and attach it to Rayquaza ex."
			},

		},
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				en: "Dragon Burst",
				fr: "Jet de dragon",
				de: "Dragon Burst"
			},
			effect: {
				en: "Discard either all Fire Energy or all Lightning Energy attached to Rayquaza ex. This attack does 40 damage times the amount of Fire or Lightning Energy discarded.",
				fr: "Défaussez soit toutes les Énergies  soit toutes les Énergies  attachées à Rayquaza ex. Cette attaque inflige 40 dégâts multipliés par le nombre d'Énergie  ou  défaussées.",
				de: "Discard either all  Energy or all  Energy attached to Rayquaza ex. This attack does 40 damage times the amount of  or  Energy discarded."
			},
			damage: "40x",

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
			type: "Fighting",
			value: "-30"
		},
		{
			type: "Water",
			value: "-30"
		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 88642,
		cardmarket: 275974
	}
}

export default card
