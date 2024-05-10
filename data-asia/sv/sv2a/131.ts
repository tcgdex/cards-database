import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラプラス",
		'zh-tw': "拉普拉斯"
	},

	illustrator: "LINNE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [131],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "寒さに 強く 氷の 海も 平気。 皮膚は スベスベで 少しだけ ひんやり しているよ。",
		'zh-tw': "十分耐寒，不畏冰海。皮膚滑滑的， 摸起來會有點涼。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "せなかにのせる",
			'zh-tw': "後背乘載"
		},

		effect: {
			ja: "自分の山札からポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "アクアエッジ",
			'zh-tw': "水之刀鋒"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card