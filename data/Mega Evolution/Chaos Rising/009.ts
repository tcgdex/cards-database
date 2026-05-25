import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886401,
				tcgplayer: 693526
			}
		},
	],

	name: {
		en: "Ninetales"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [38],
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Vulpix"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Nine-Tailed Reflection"
		},

		cost: ["Fire"],

		effect: {
			en: "Move all damage counters from 1 of your Benched Pokémon to your opponent's Active Pokémon."
		}
	}, {
		name: {
			en: "Will-O-Wisp"
		},

		cost: ["Fire", "Fire"],
		damage: 70
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card