import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Dark Dragonite"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [149],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Dragonair"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Summon Minions"
			},
			effect: {
				en: "When you play Dark Dragonite from your hand, search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giant Tail"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing."
			},

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		en: "Sometimes called \"The God of Destruction.\" Its wings are able to support it in spite of its massive weight."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274770,
				tcgplayer: 84585
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84585,
				cardmarket: 274770
			}
		}
	],

}

export default card
