import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "イーユイ"
	},
	illustrator: "Gemi",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	description: {
		ja: "３０００度の炎を操る。岩や砂利を溶かして作ったマグマの海をゆうゆうと泳ぐ。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "やけつくだいち"
		},
		damage: 40,
		effect: {
			ja: "場に出ている相手のスタジアムをトラッシュする。トラッシュした場合、次の相手の番、相手は手札からスタジアムを出せない。"
		},
		cost: ["Fire"]
	}],
	weaknesses: [{
		type: "Water",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [1004]
}

export default card
