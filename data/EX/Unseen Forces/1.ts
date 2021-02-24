import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Ampharos",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 120,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Flaaffy",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Connect",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a basic Energy card attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Ampharos is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Miraculous Thunder",
			},
			effect: {
				en: "You may discard all Lightning Energy attached to Ampharos. If you do, the Defending Pokémon is now Burned and Confused.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
