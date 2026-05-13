import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "メッソン"
	},
	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	description: {
		ja: "口から吹き出す水の弾で木の実を撃ち落として食べる。狙いは百発百中だ。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "ふいをつく"
		},
		damage: 30,
		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。"
		},
		cost: ["Water"]
	}],
	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [816]
}

export default card
