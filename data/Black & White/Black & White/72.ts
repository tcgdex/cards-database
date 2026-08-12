import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Vullaby",
		fr: "Vostourno",
		es: "Vullaby",
		it: "Vullaby",
		pt: "Vullaby",
		de: "Skallyk"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		629,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Surprise Attack",
				fr: "Attaque Surprise",
				de: "Überraschungsangriff"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
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

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Its wings are too tiny to allow it to fly. As the time approaches for it to evolve, it discards the bones it was wearing.",
		de: "Seine Flügel sind noch zu klein zum Fliegen. Kurz bevor es sich entwickelt, wirft es seine Schädelwindel ab."
	},

	thirdParty: {
		cardmarket: 279810,
		tcgplayer: 90428
	}
}

export default card
