import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "クレセリア",
		'zh-tw': "克雷色利亞"
	},

	illustrator: "saino misaki",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [488],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "クレセリアの 羽を 持って 寝ると 楽しい 夢が 見られると いう。 三日月の化身と 呼ばれている。",
		'zh-tw': "據說只要拿著克雷色利亞 的羽毛入睡，就能作個美夢。 被稱為新月的化身。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "ムーンライトリバース",
			'zh-tw': "月下反轉"
		},

		effect: {
			ja: "自分のポケモン全員にのっているダメカンをそれぞれ2個ずつ選び、相手のポケモン1匹にのせ替える。",
			'zh-tw': "選擇自己的所有寶可夢身上放置的傷害指示物各2個，改放於對手的1隻寶可夢身上。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			ja: "ルナブラスト",
			'zh-tw': "月光爆破"
		},

		damage: 110,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 650991,
				tcgplayer: 569783,
				cardtrader: 234094,
			},
		},
	]
}

export default card