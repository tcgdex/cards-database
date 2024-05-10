import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ドゴーム",
		'zh-tw': "吼爆彈"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [294],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "大声は 聴覚だけでなく 空気の 圧力となり 敵を 吹きとばし ダメージを 与える。",
		'zh-tw': "巨大的叫聲不只會傷害聽覺，還會壓縮空氣造成衝擊波 將對手震飛造成傷害。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "のしかかり",
			'zh-tw': "泰山壓頂"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "メガインパクト",
			'zh-tw': "超級衝擊"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card