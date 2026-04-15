import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火焰鳥",
		ja: "ファイヤー"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "每當牠拍動翅膀，羽毛就會閃爍出美麗的赤紅火焰。 是傳說的鳥寶可夢之一。",
		ja: "羽ばたくと 翼の 炎が 赤く 美しく きらめく 伝説の 鳥ポケモンの １匹。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "烈火之翼",
			ja: "れっかのつばさ"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則增加70點傷害。這個招式的傷害不計算弱點。",
			ja: "このポケモンにダメカンがのっているなら、70ダメージ追加。このワザのダメージは弱点を計算しない。"
		},

		damage: "20＋",
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [146],

	thirdParty: {
		cardmarket: 605869
	}
}

export default card