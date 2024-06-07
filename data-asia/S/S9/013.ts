import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "謝米VSTAR",
		ja: "シェイミVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Grass"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "星星綻放"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。將自己的備戰區的所有【草】寶可夢各恢復「120」HP。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "復仇暴擊",
			ja: "リベンジバースト"
		},

		effect: {
			'zh-tw': "增加對手已經獲得的獎賞卡的張數×40點傷害。",
			ja: "相手がすでにとったサイドの枚数×40ダメージ追加。"
		},

		damage: "120＋",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "スターブルーム"
		},

		effect: {
			ja: "自分の番に使える。自分のベンチのポケモン全員のHPを、それぞれ「120」回復する。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card