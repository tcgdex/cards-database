import { Card } from "../../../interfaces"
import Set from "../SP6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洛托姆VSTAR",
		ja: "ロトムVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Lightning"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "轉化星星"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。將自己的任意數量的手牌丟棄，從牌庫抽出與其張數相同數量的卡。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "廢鐵脈衝",
			ja: "スクラップパルス"
		},

		effect: {
			'zh-tw': "將自己的棄牌區的任意數量的「寶可夢道具」放置於放逐區，增加其張數×40點傷害。",
			ja: "自分のトラッシュにある「ポケモンのどうぐ」を好きなだけロストゾーンに置き、その枚数×40ダメージ追加。"
		},

		damage: "80＋",
		cost: ["Lightning", "Lightning"]
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "へんかんスター"
		},

		effect: {
			ja: "自分の番に使える。自分の手札を好きなだけトラッシュし、その枚数ぶん、山札を引く。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card