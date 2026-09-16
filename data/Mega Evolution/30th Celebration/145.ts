import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Zorua"
	},

	illustrator: "0313",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [570],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	description: {
		en: "A once-departed soul, returned to life in Hisui. Derives power from resentment, which rises as energy atop its head and takes on the forms of foes. In this way, Zorua vents lingering malice."
	},

	attacks: [{
		name: {
			en: "Scratch"
		},

		cost: ["Colorless"],

		damage: 20,
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907752,
				tcgplayer: 696686
			}
		}
	],
}

export default card
