import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍王蠍V",
		ja: "ドラピオンV"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "狂野風格",
			ja: "ワイルドスタイル"
		},

		effect: {
			'zh-tw': "這隻寶可夢使用招式所需的【無】能量，減少對手的場上「一擊」「連擊」「匯流」寶可夢的數量。",
			ja: "相手の場の「いちげき」「れんげき」「フュージョン」のポケモンの数ぶん、このポケモンがワザを使うためのエネルギーは少なくなる。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極限之尾",
			ja: "ダイナミックテール"
		},

		effect: {
			'zh-tw': "自己的1隻寶可夢也受到60點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "自分のポケモン1匹にも、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		damage: 190,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card