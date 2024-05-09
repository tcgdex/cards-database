import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "レパルダス"
	},

	illustrator: "Yoshioka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [510],
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "フォクスライと 縄張りを めぐり 争う。 音ひとつ たてずに 獲物の 背後に 忍び寄る。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ダーティスワップ"
		},

		effect: {
			ja: "自分のベンチポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "きりさく"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card