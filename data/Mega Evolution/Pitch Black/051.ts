import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Inkay",
		fr: "Sepiatop",
		es: "Inkay",
		'es-mx': "Inkay",
		de: "Iscalar"
	},

	illustrator: "Yuriko Akase",
	rarity: "Common",
	category: "Pokemon",
	dexId: [686],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Procurement"
		},

		cost: ["Darkness"],

		effect: {
			en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "Spinning Attack"
		},

		cost: ["Darkness", "Darkness"],

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895836,
				tcgplayer: 704808
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895836,
				tcgplayer: 704808
			}
		},
	],
}

export default card
