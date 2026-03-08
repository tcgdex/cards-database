import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Slakoth",
		fr: "Parecool",
		de: "Bummelz"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		287,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lazy Punch",
				fr: "Ramollo-poing",
				de: "Müder Schlag"
			},
			effect: {
				en: "Slakoth can't attack during your next turn.",
				fr: "Parecool ne peut pas attaquer lors de votre prochain tour.",
				de: "Bummelz kann in deinem nächsten Zug nicht angreifen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275857,
		tcgplayer: 89294
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
