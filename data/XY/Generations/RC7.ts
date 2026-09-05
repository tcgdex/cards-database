import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Snorunt",
		fr: "Stalgamin",
		de: "Schneppke"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [25],

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
				"Colorless",
			],
			name: {
				en: "Icy Snow",
				fr: "Verglas",
				de: "Eisiger Schnee"
			},

			damage: 10,

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
		en: "What a delicious-looking snowman! I think I'll sneak a bite. It's OK…no one's looking, right?",
		de: "Was für ein köstlich aussehender Schneemann! Einfach zum reinbeißen. Es sieht ja keiner zu, oder?"
	},

	thirdParty: {
		cardmarket: 288516
	}
}

export default card
