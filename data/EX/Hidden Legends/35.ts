import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Gloom",
		fr: "Ortide",
		de: "Duflor"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Cling",
				fr: "Se cramponner",
				de: "Cling"
			},
			effect: {
				en: "After your attack, remove from Gloom the number of damage counters equal to the damage you did to the Defending Pokémon. If Gloom has fewer damage counters than that, remove all of them.",
				fr: "Après votre attaque, retirez à Ortide autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur. Si Ortide possède moins de marqueurs de dégât que de dégâts infligés, retirez-les lui tous.",
				de: "After your attack, remove from Gloom the number of damage counters equal to the damage you did to the Defending Pokémon. If Gloom has fewer damage counters than that, remove all of them."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Razor Leaf",
				fr: "Double tranch'herb",
				de: "Double Razor Leaf"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
				de: "Flip 2 coins. This attack does 40 damage times the number of heads."
			},
			damage: "40x",

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
		cardmarket: 276109,
		tcgplayer: 85782
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
