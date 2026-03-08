import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Rhydon",
		fr: "Rhinoferos",
		de: "Rizeros"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		112,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Rhyhorn",
		fr: "Rhinocorne"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Horn Attack",
				fr: "Koud'korne",
				de: "Horn Attack"
			},

			damage: 30,

		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				en: "Rock Tumble",
				fr: "Roule-pierre",
				de: "Rock Tumble"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "This attack's damage isn't affected by Resistance."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 88733,
		cardmarket: 276530
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
