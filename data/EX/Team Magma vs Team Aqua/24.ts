import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Cacnea",
		fr: "Cacnea de Team Aqua",
		de: "Team Aquas Tuska"
	},

	illustrator: "K. Utsunomiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		331,
	],

	hp: 50,

	types: [
		"Grass",
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Paralyzing Gaze",
				fr: "Regard paralysant",
				de: "Paralyzing Gaze"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pin Missile",
				fr: "Dard-nuée",
				de: "Pin Missile"
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Flip 4 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276001,
		tcgplayer: 89774
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["pre-release"]
		},
		{
			type: "reverse",
		}
	]
}

export default card
