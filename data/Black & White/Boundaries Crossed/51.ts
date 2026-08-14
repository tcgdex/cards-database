import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
		es: "Voltorb",
		it: "Voltorb",
		pt: "Voltorb",
		de: "Voltobal"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Static Shock",
				fr: "Choc Statique",
				de: "Statischer Schock"
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

	description: {
		en: "It looks just like a Poké Ball. It is dangerous because it may electrocute or explode on contact.",
		de: "Sieht aus wie ein Pokéball. Es ist gefährlich, da es bei Berührung explodieren kann."
	},

	thirdParty: {
		cardmarket: 280638,
		tcgplayer: 90423
	}
}

export default card
