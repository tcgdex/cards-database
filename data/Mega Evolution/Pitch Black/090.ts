import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Slowbro",
		fr: "Flagadoss",
		es: "Slowbro",
		'es-mx': "Slowbro",
		de: "Lahmus"
	},

	illustrator: "Mekayu",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [80],
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Slowpoke"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "All Out"
		},

		cost: ["Psychic"],

		damage: "50+",

		effect: {
			en: "If you have no cards in your hand, this attack does 160 more damage."
		}
	}, {
		name: {
			en: "Zen Headbutt"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		damage: 110
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895874,
				tcgplayer: 704847
			}
		},
	],
}

export default card
