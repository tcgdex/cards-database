import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵螯龍蝦",
		ja: "シザリガー"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "不停揮舞自己巨大的鉗子，是個性情粗暴的傢伙。 被認為是很難培育的寶可夢。",
		ja: "巨大な ハサミを 振りまわす 暴れ者。 育てるのが とても 難しい ポケモンと いわれる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "推擊",
			ja: "どつく"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "蝦鉗衝擊",
			ja: "クラブインパクト"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
		},

		damage: 150,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [342]
}

export default card