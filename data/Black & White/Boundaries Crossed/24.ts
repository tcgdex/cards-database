import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Tepig",
		fr: "Gruikui",
		es: "Tepig",
		it: "Tepig",
		pt: "Tepig",
		de: "Floink"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		498,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flare",
				fr: "Flamboiement",
				de: "Flackern"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
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
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It blows fire through its nose. When it catches a cold, the fire becomes pitch-black smoke instead.",
		de: "Es schießt Flammen aus seinem Rüssel. Ist es erkältet, kommt statt Feuer aber nur pechschwarzer Rauch zum Vorschein."
	},

	thirdParty: {
		cardmarket: 280611,
		tcgplayer: 89884
	}
}

export default card
