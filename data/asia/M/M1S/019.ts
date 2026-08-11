import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ウデッポウ"
	},
	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	description: {
		ja: "右腕のハサミの中でガスを爆発させて水を発射。飛んでいるポケモンを狙い撃つ。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "スプラッシュ"
		},
		damage: 50,
		cost: ["Water", "Water"]
	}],
	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840569,
				tcgplayer: 647272,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [692]
}

export default card
