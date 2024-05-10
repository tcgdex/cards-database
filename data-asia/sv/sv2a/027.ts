import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サンド",
		'zh-tw': "穿山鼠"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [27],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "地面を 掘って 巣穴を つくる。 地中の 硬い 岩も 鋭い ツメで 砕いて 掘り進むぞ。",
		'zh-tw': "會在地面挖洞築巢。即使遇到地下堅硬的岩石， 也會用銳利的爪子擊碎並向前挖進。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "すなでかくす",
			'zh-tw': "流沙藏身"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のトラッシュにあるトレーナーズは、相手のグッズまたはサポートの効果で、山札にもどせない。",
			'zh-tw': "只要這隻寶可夢在場上，對手的棄牌區的訓練家卡，無法因對手的物品卡或者支援者卡的效果而放回牌庫。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ひっかく",
			'zh-tw': "抓"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card