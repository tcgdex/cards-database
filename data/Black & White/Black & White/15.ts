import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Tepig",
		fr: "Gruikui",
		es: "Tepig",
		it: "Tepig",
		pt: "Tepig",
		de: "Floink"
	},

	illustrator: "Kouki Saitou",
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
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
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
		en: "It can deftly dodge its foe's attacks while shooting fireballs from its nose. It roasts berries before it eats them.",
		de: "Weicht flink gegnerischen Angriffen aus und schießt Flammen aus dem Rüssel, mit denen es gern auch mal Nüsse röstet."
	},

	thirdParty: {
		cardmarket: 279753,
		tcgplayer: 89879
	}
}

export default card
