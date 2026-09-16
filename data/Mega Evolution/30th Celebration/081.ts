import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Gimmighoul"
	},

	illustrator: "Fujimoto Gold",
	rarity: "Common",
	category: "Pokemon",
	dexId: [999],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	description: {
		en: "It wanders around, carrying an old coin on its back. It survives by draining the life-force from humans who try to pick up its coin."
	},

	attacks: [{
		name: {
			en: "Strolls So Much"
		},

		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, search your deck for a card and put it into your hand. Then, shuffle your deck."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907688,
				tcgplayer: 716477
			}
		}
	],
}

export default card
