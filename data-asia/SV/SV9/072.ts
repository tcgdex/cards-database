import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ボーマンダex",
		'zh-tw': "暴飛龍ex",
		'zh-cn': "暴飛龍ex"
	},

	illustrator: "toriyufu",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "ワイドブラスト",
			'zh-tw': "廣域爆破",
			'zh-cn': "廣域爆破"
		},

		effect: {
			ja: "相手のベンチポケモン全員に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的所有備戰寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的所有備戰寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Fire", "Water", "Colorless", "Colorless"],

		name: {
			ja: "ドラゴンインパクト",
			'zh-tw': "狂龍衝擊",
			'zh-cn': "狂龍衝擊"
		},

		damage: 300,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card