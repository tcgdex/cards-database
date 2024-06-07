import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狐大盜",
		ja: "フォクスライ"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "會偷偷在看中的獵物身上留下標記，追蹤目標的氣味，在對方放鬆警戒時偷盜。",
		ja: "狙った 獲物は こっそり マーキング。 においを 辿って 油断 したころ 盗みに 来るぞ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "五里霧中",
			ja: "けむにまく"
		},

		effect: {
			'zh-tw': "若對手剩餘獎賞卡的張數為2張以下則生效。只要這隻寶可夢在場上，對手從手牌使出支援者時，自己的備戰區的所有「寶可夢【V】」不會受到其效果的影響。",
			ja: "相手のサイドの残り枚数が2枚以下なら、はたらく。このポケモンがいるかぎり、自分のベンチの「ポケモンV」全員は、相手が手札からサポートを出して使ったとき、その効果を受けない。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "銳利之牙",
			ja: "するどいキバ"
		},

		damage: 110,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [828]
}

export default card