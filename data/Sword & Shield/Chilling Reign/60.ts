import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Kirlia",
		fr: "Kirlia"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal"
	},

	attacks: [{
		name: {
			en: "Mirage Step",
			fr: "Marche Mirage"
		},

		effect: {
			en: "Search your deck for up to 3 Kirlia and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 3 Kirlia, puis placez-les sur votre Banc. Mélangez ensuite votre deck."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card