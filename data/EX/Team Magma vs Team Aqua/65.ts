import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Poochyena",
		fr: "Medhyena de Team Magma",
		de: "Team Magmas Fiffyen"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		261,
	],

	hp: 40,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Snarl",
				fr: "Grondement féroce",
				de: "Snarl"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to the Defending Pokémon. If tails, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts au Pokémon Défenseur. Si c'est pile, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, this attack does 10 damage to the Defending Pokémon. If tails, the Defending Pokémon is now Paralyzed."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276042,
		tcgplayer: 89838
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
