import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ドレディア",
		'zh-tw': "洗翠 裙兒小姐"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [549],
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		ja: "チュリネ"
	},

	description: {
		ja: "雪深き山に 棲みしゆえに 脚力が 発達したと 考察す。 周囲の者を 鼓舞する 香りを 冠の花より 放つ。",
		'zh-tw': "據考察，雪山深處的棲息環境為其帶來了發達的腳力。會從頭冠般的 花中發出鼓舞周遭夥伴的香氣。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "たつまきルッツ",
			'zh-tw': "龍捲風勾手跳"
		},

		effect: {
			ja: "相手のポケモン全員に、それぞれ20ダメージ。このポケモンをベンチポケモンと入れ替える。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的所有寶可夢各受到20點傷害。將這隻寶可夢與備戰寶可夢互換。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "リーフステップ",
			'zh-tw': "綠葉舞步"
		},

		damage: 100,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 650966,
				tcgplayer: 569761,
				cardtrader: 234072,
			},
		},
	]
}

export default card