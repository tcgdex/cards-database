import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "パチリス"
	},
	illustrator: "tono",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	description: {
		ja: "ほっぺに電気袋を持つポケモンの仲間。尻尾から溜まった電気を放出する。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "しびれるまえば"
		},
		damage: 10,
		effect: {
			ja: "次の相手の番、このワザを受けたポケモンに、相手が手札からエネルギーをつけるたび、そのポケモンにダメカンを8個のせる。"
		},
		cost: ["Lightning"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [417]
}

export default card
