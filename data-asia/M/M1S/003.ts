import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "チコリータ"
	},
	illustrator: "kamonabe",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	description: {
		ja: "日差しを浴びるのが大好き。頭の葉っぱを使って暖かい場所を探す。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "はっぱカッター"
		},
		damage: 20,
		cost: ["Grass"]
	}],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [152]
}

export default card
