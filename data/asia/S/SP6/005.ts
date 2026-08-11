import { Card } from "../../../interfaces"
import Set from "../SP6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏瑪然特V",
		ja: "ザマゼンタV"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "王者之勢",
			ja: "おうじゃのかまえ"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次，若使用，則自己的回合結束。將自己的手牌全部丟棄，從牌庫抽出5張卡。",
			ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。自分の手札をすべてトラッシュし、山札を5枚引く。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "復仇暴擊",
			ja: "リベンジバースト"
		},

		effect: {
			'zh-tw': "增加對手已經獲得的獎賞卡的張數×30點傷害。",
			ja: "相手がすでにとったサイドの枚数×30ダメージ追加。"
		},

		damage: "120＋",
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card