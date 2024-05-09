import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "バクーダ"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [323],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "火山の 火口で 生活する。 １０年ごとに 背中の コブが 大噴火することで 有名だ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ふんか"
		},

		damage: "50＋",

		effect: {
			ja: "おたがいの山札を上から1枚ずつトラッシュし、その中にあるエネルギーの枚数×100ダメージ追加。"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ばくねつスタンプ"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card