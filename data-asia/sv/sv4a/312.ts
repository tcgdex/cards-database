import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ペリッパー",
		'zh-tw': "大嘴鷗"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	dexId: [279],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "くちばしに 小さな ポケモンを 入れて 飛ぶ 空の 配達屋。 海に 浮かんで 羽を 休める。",
		'zh-tw': "把小型寶可夢裝在鳥嘴裡飛翔的空中送貨員。 會漂浮在海上讓翅膀休息。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かぜのたより",
			'zh-tw': "傳言"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札またはトラッシュのどちらかを選ぶ。その中からサポートを1枚選び、相手に見せて、手札に加える。山札を見たなら、山札を切る。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。選擇自己的牌庫或者棄牌區任一方。從其中選擇1張支援者卡，在給對手看過後加入手牌。若看過牌庫，則重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "つばさでうつ",
			'zh-tw': "翅膀攻擊"
		},

		damage: 90
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