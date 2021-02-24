import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Ampharos",
	},
	illustrator: "Emi Miwa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 120,
	types: [
		"Lightning",
		"Darkness",
	],
	evolveFrom: {
		en: "Dark Flaaffy",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Darkest Impulse",
			},
			effect: {
				en: "As long as Dark Ampharos is in play, whenever your opponent plays an Evolution card from his or her hand to evolve 1 of his or her Pokémon, put 2 damage counters on that Pokémon. You can't use more than 1 Darkest Impulse Poké-Body each turn.",
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
				en: "Ram",
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shock Bolt",
			},
			effect: {
				en: "Discard all Lightning Energy attached to Dark Ampharos.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
