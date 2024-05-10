import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガーディ",
		'zh-tw': "卡蒂狗"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [58],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "自分より 強くて 大きな 相手にも 恐れずに 立ち向かう 勇敢で 頼もしい 性格。",
		'zh-tw': "能毫不畏懼地去對抗比自己更強更大的對手。 性格非常勇敢可靠。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "じょうはつ",
			'zh-tw': "蒸發"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的【水】能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card