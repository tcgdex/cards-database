import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Makuhita",
		fr: "Makuhita",
		es: "Makuhita",
		it: "Makuhita",
		pt: "Makuhita",
		de: "Makuhita"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		296,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Slap Push",
				fr: "Grande Claque",
				de: "Stoß"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It toughens its body by slamming into thick trees. Many snapped trees can be found near its nest.",
		de: "Es stärkt seinen Körper, indem es gegen Bäume rennt. In seiner Nähe finden sich viele umgekippte Bäume."
	},

	thirdParty: {
		cardmarket: 280669,
		tcgplayer: 87134
	}
}

export default card
