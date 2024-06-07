import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉鐸拉戈V",
		ja: "レジドラゴV"
	},

	illustrator: "Hataya",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "天之吶喊",
			ja: "てんのさけび"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方3張卡丟棄，將其中的能量卡全部附於這隻寶可夢身上。",
			ja: "自分の山札を上から3枚トラッシュし、その中にあるエネルギーをすべて、このポケモンにつける。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "龍之鐳射",
			ja: "ドラゴンレーザー"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		damage: 130,
		cost: ["Grass", "Grass", "Fire"]
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card