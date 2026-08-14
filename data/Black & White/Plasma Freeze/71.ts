import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Pawniard",
		fr: "Scalpion",
		es: "Pawniard",
		it: "Pawniard",
		pt: "Pawniard",
		de: "Gladiantri"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		624,
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
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Ignoring their injuries, groups attack by sinking the blades that cover their bodies into their prey.",
		de: "Selbst wenn sie verletzt sind, greifen sie ihren Gegner unbeirrt in der Gruppe an, indem sie ihre Klingen in ihn hineinrammen."
	},

	thirdParty: {
		cardmarket: 280949,
		tcgplayer: 87970
	}
}

export default card
