import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Deino"
	},

	illustrator: "Gapao",
	rarity: "Common",
	category: "Pokemon",
	dexId: [633],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	description: {
		en: "It nests deep inside a cave. Food there is scarce, so Deino will sink its teeth into anything that moves and attempt to eat it."
	},

	attacks: [{
		name: {
			en: "Gnaw"
		},

		cost: ["Darkness"],

		damage: 10,
	}, {
		name: {
			en: "Headbutt"
		},

		cost: ["Darkness", "Colorless"],

		damage: 20,
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907704,
				tcgplayer: 716490
			}
		}
	],
}

export default card
