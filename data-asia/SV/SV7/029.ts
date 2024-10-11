import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電擊魔獸",
		'zh-cn': "電擊魔獸",
		ja: "エレキブル"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		'zh-tw': "會用尾巴前端抵住對手， 然後在一瞬間注入 超過２萬伏特的電流。",
		'zh-cn': "會用尾巴前端抵住對手， 然後在一瞬間注入 超過２萬伏特的電流。",
		ja: "相手に 尻尾の先を 押しつけ 瞬時に ２万ボルト 以上の 高圧 電流を 送りこむ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "電氣猛擊",
			'zh-cn': "電氣猛擊",
			ja: "エレキスラッグ"
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "雷電在地",
			'zh-cn': "雷電在地",
			ja: "ライトニングダウン"
		},

		effect: {
			'zh-tw': "在下個自己的回合，自己的所有寶可夢無法使用招式。（包含新上場的寶可夢。）",
			'zh-cn': "在下個自己的回合，自己的所有寶可夢無法使用招式。（包含新上場的寶可夢。）",
			ja: "次の自分の番、自分のポケモン全員は、ワザが使えない。（新しく場に出したポケモンもふくむ。）"
		},

		damage: 220,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [466]
}

export default card