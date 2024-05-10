import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゼニガメ",
		'zh-tw': "傑尼龜"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	dexId: [7],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "危なくなると 甲羅に 手足を 引っこめて 身を 守りながら 口から 水を 吹き出している。",
		'zh-tw': "當牠遇到危險的時候，會將四肢收回甲殼裡保護自己，同時從嘴裡噴出水來。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "からにこもる",
			'zh-tw': "縮入殼中"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "ロケットずつき",
			'zh-tw': "火箭頭錘"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card