import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ニョロトノ",
		'zh-tw': "蚊香蛙皇"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [186],
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		ja: "ニョロゾ"
	},

	description: {
		ja: "夜になると 池の 畔に 現れる。 怒鳴るような 声で 鳴いて 縄張りを アピールするぞ。",
		'zh-tw': "天黑後就會出現在池子邊。會用怒吼般的聲音大叫， 來強調那是自己的地盤喔。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			ja: "とのさまおんど",
			'zh-tw': "君主樂舞"
		},

		effect: {
			ja: "自分のベンチにそれぞれ、「ニョロモ」がいるなら60ダメージ追加、「ニョロゾ」がいるなら90ダメージ追加、「ニョロボン」がいるなら120ダメージ追加。",
			'zh-tw': "若自己的備戰區有「蚊香蝌蚪」則增加60點傷害，有「蚊香君」則增加90點傷害，有「蚊香泳士」則增加120點傷害。"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "ハイドロスプラッシュ",
			'zh-tw': "水炮濺射"
		},

		damage: 100,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650973,
				tcgplayer: 569768,
				cardtrader: 234079,
			},
		},
	]
}

export default card