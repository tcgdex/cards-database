import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Umbreon"
	},

	illustrator: "Keisuke Azuma",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [197],
	hp: 270,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Lunatic Claw"
		},

		cost: ["Darkness", "Colorless"],

		damage: "100+",

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 140 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907699,
				tcgplayer: 696835
			}
		}
	],
}

export default card
