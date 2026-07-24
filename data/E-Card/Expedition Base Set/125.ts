import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Healing Berry",
		fr: "Ptitard",
		de: "Quapsel"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Trainer",
	effect: {
		en: "Attach Healing Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool card attached to it. If that Pokémon is Knocked Out, discard this card. At the end of any turn, if the Pokémon this card is attached to has 20 HP or less, remove 3 damage counters from that Pokémon and discard this card.",
	},
	trainerType: "Tool",
	set: Set,

	dexId: [
		60,
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
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
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


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88256,
				cardmarket: 275000
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
