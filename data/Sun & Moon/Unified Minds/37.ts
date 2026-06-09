import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Snorunt",
		fr: "Stalgamin",
		es: "Snorunt",
		it: "Snorunt",
		pt: "Snorunt",
		de: "Schneppke"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		361,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Icicle",
				fr: "Concrétion Glacée",
				es: "Témpano",
				it: "Stalattite",
				pt: "Pingente de Gelo",
				de: "Eiszapfen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It feeds mainly on ice and snow. It's only able to survive in a limited number of places in the warm Alola region.",
	},

	thirdParty: {
		cardmarket: 388012,
		tcgplayer: 194958
	}
}

export default card
