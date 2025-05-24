import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火焰雞",
		'zh-cn': "火焰雞",
		ja: "バシャーモ"
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		'zh-tw': "遇到強敵時會從手腕噴出火焰。 有著能夠躍過大樓的腳力。",
		'zh-cn': "遇到強敵時會從手腕噴出火焰。 有著能夠躍過大樓的腳力。",
		ja: "強敵に 出会うと 手首から 炎を 噴き出す。 ジャンプで ビルを 跳び越す 脚力。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "高溫爆破",
			'zh-cn': "高溫爆破",
			ja: "ヒートブラスト"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "業火連踢",
			'zh-cn': "業火連踢",
			ja: "ごうかれんきゃく"
		},

		effect: {
			'zh-tw': "將2個這隻寶可夢身上附加的能量丟棄，對手的1隻備戰寶可夢也受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "將2個這隻寶可夢身上附加的能量丟棄，對手的1隻備戰寶可夢也受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "このポケモンについているエネルギーを2個トラッシュし、相手のベンチポケモン1匹にも、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [257]
}

export default card