import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "師父鼬",
		'zh-cn': "師父鼬",
		ja: "コジョンド"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "將雙臂的毛如鞭子般靈活使用。 一旦開始連續攻擊，誰也無法阻止。",
		'zh-cn': "將雙臂的毛如鞭子般靈活使用。 一旦開始連續攻擊，誰也無法阻止。",
		ja: "両手の 体毛を ムチのように 使いこなし 連続攻撃を はじめると だれにも 止められない。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "疾風迴旋",
			'zh-cn': "疾風迴旋",
			ja: "はやてまわし"
		},

		effect: {
			'zh-tw': "若對手的手牌為5張以下，則增加60點傷害。",
			'zh-cn': "若對手的手牌為5張以下，則增加60點傷害。",
			ja: "相手の手札が5枚以下なら、60ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [620],

	thirdParty: {
		cardmarket: 779070
	}
}

export default card