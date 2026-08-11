import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Larvesta",
		fr: "Pyronille",
		es: "Larvesta",
		it: "Larvesta",
		pt: "Larvesta",
		de: "Ignivor"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		636,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare",
				fr: "Flamboiement",
				es: "Llama",
				it: "Fiammata",
				pt: "Chama",
				de: "Flackern"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Said to have been born from the sun, it spews fire from its horns and encases itself in a cocoon of fire when it evolves.",
	},

	thirdParty: {
		cardmarket: 302150,
		tcgplayer: 146665
	}
}

export default card
