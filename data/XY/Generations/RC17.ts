import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Flabébé",
		fr: "Flabébé",
		de: "Flabébé"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		669,
	],

	hp: 40,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'Herbe",
				de: "Rasierblatt"
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

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It's OK. No one will take away your flower. You look cute even when you're angry.",
		de: "Keine Sorge. Niemand nimmt dir deine Blume weg. Auch wenn du wütend bist, siehst du niedlich aus."
	},

	thirdParty: {
		cardmarket: 288526
	}
}

export default card
