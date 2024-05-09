import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ツンベアー"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [614],
	hp: 150,
	types: ["Water"],

	description: {
		ja: "肉食で 獰猛な ポケモン。 獲物を 捕まえると 冷気を 吐きかけ 凍らせて 保存する。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "つららパンチ"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "フロストパージ"
		},

		damage: 170,

		effect: {
			ja: "コインを1回投げウラなら、このポケモンについているエネルギーを、すべてトラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3
}

export default card