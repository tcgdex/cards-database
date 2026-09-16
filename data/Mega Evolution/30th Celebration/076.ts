import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Xerneas"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [716],
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	description: {
		en: "When the horns on its head shine in seven colors, it is said to be sharing everlasting life."
	},

	attacks: [{
		name: {
			en: "Geonavigation"
		},

		cost: ["Colorless"],

		effect: {
			en: "Search your deck for up to 2 Stadium cards, reveal them, and put them into your hand. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "Aurora Horns"
		},

		cost: ["Psychic", "Psychic", "Colorless"],

		damage: 100,
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907683,
				tcgplayer: 716472
			}
		}
	],
}

export default card
