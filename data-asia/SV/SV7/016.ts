import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "炎兔兒",
		'zh-cn': "炎兔兒",
		ja: "ヒバニー"
	},

	illustrator: "Cona Nitanda",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "聚集了火之能量的 腳底肉球會升至高溫， 帶給對手巨大的傷害。",
		'zh-cn': "聚集了火之能量的 腳底肉球會升至高溫， 帶給對手巨大的傷害。",
		ja: "炎エネルギーが 集まる 足の 肉球は 高温になり 相手に 大ダメージを 与える。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電光一閃",
			'zh-cn': "電光一閃",
			ja: "でんこうせっか"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加10點傷害。",
			'zh-cn': "擲1次硬幣若為正面，則增加10點傷害。",
			ja: "コインを1回投げオモテなら、10ダメージ追加。"
		},

		damage: "10＋",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [813]
}

export default card