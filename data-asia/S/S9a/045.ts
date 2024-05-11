import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 狙射樹梟VSTAR",
		ja: "ヒスイ ジュナイパーVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "星星風雲"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。從牌庫抽卡直到自己的手牌滿8張為止。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "筋斗羽毛",
			ja: "サマーソルトフェザー"
		},

		effect: {
			'zh-tw': "若希望，從自己的手牌將最多3張能量卡丟棄，增加其張數×30點傷害。",
			ja: "のぞむなら、自分の手札からエネルギーを3枚までトラッシュし、その枚数×30ダメージ追加。"
		},

		damage: "160＋",
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "フウウンスター"
		},

		effect: {
			ja: "自分の番に使える。自分の手札が8枚になるように、山札を引く。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card