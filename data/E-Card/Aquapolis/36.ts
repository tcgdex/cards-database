import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Sudowoodo",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		185,
	],
	hp: 60,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Copy",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Sudowoodo doesn't have the Energy necessary to use that attack. (You must still do anything else required in order to use that attack.)",
			},

		},
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Energy Draw",
			},
			effect: {
				en: "Search your deck for a basic Energy card and attach it to Sudowoodo. Shuffle your deck afterward.",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
