import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ツンベアー",
		'zh-tw': "凍原熊"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [614],
	hp: 150,
	types: ["Water"],

	description: {
		ja: "肉食で 獰猛な ポケモン。 獲物を 捕まえると 冷気を 吐きかけ 凍らせて 保存する。",
		'zh-tw': "性情殘暴的肉食性寶可夢。會吐出寒氣把捕獲的獵物凍結起來保存。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "つららパンチ",
			'zh-tw': "冰柱拳"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "フロストパージ",
			'zh-tw': "冰霜光芒"
		},

		damage: 170,

		effect: {
			ja: "コインを1回投げウラなら、このポケモンについているエネルギーを、すべてトラッシュする。",
			'zh-tw': "擲1次硬幣若為反面，則將這隻寶可夢身上附加的能量全部丟棄。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card