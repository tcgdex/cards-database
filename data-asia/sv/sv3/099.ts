import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "カラミンゴ",
		'zh-tw': "纏紅鶴"
	},

	illustrator: "Hiroki Asanuma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [973],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "お腹に 溜めた エネルギーが くちばしから 漏れないように 首を 根元で 結んでいるらしい。",
		'zh-tw': "為了避免積蓄在肚子裡的能量外流，似乎會把自己的脖子繫在頸根部上。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つつく",
			'zh-tw': "啄"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "シンクロフェザー",
			'zh-tw': "同步羽毛"
		},

		damage: 60,

		effect: {
			ja: "自分のベンチに「カラミンゴ」がいるなら、相手のベンチポケモン1匹にも、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "若自己的備戰區有「纏紅鶴」，則對手的1隻備戰寶可夢也受到60點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card