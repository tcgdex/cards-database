import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Manectric",
		fr: "Elecsprint",
		de: "Voltenso"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Attract Current",
				fr: "Courant électrique",
				de: "Attract Current"
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Énergie  et attachez-la à un de vos Pokémon. Mélangez ensuite votre deck.",
				de: "Search your deck for a  Energy card amd attach it to 1 of your Pokémon. Shuffle your deck afterward."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Jolt",
				fr: "Secousse tonnerre",
				de: "Thunder Jolt"
			},
			effect: {
				en: "Flip a coin. If tails, Manectric does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Elecsprint s'inflige 10 dégâts.",
				de: "Flip a coin. If tails, Manectric does 10 damage to itself."
			},
			damage: 50,

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
			type: "Metal",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275657,
		tcgplayer: 87153
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
	]
}

export default card
