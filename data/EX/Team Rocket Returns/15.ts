import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Dragonite",
		de: "Dunkles Dragoran"
	},

	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Dark Dragonair",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dark Trance",
				de: "Dark Trance"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Darkness Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Dark Dragonite is affected by a Special Condition.\"",
				de: "As often as you like during your turn (before your attack), you may move a  Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Dark Dragonite is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				en: "Double Wing Attack",
				de: "Double Wing Attack"
			},
			effect: {
				en: "Does 30 damage to each Defending Pokémon.",
				de: "Does 30 damage to each Defending Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Swipe",
				de: "Claw Swipe"
			},

			damage: 50,

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
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276307,
		tcgplayer: 84587
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			foil: "cosmos"
		},
	]
}

export default card
