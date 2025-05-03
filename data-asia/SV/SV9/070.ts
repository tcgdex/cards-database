import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "タツベイ",
		'zh-tw': "寶貝龍",
		'zh-cn': "寶貝龍"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [371],
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "鋼鉄並みに 硬い 頭は 岩も 粉々に 砕く。 翼が 生えるのを 待ち続ける。",
		'zh-tw': "腦袋有如鋼鐵般堅硬， 就連岩石都能撞得粉碎。 會一直等待長出翅膀的那一刻。",
		'zh-cn': "腦袋有如鋼鐵般堅硬， 就連岩石都能撞得粉碎。 會一直等待長出翅膀的那一刻。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かみつく",
			'zh-tw': "咬住",
			'zh-cn': "咬住"
		},

		damage: 10
	}, {
		cost: ["Fire", "Water"],

		name: {
			ja: "とつげき",
			'zh-tw': "突擊",
			'zh-cn': "突擊"
		},

		damage: 50,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'zh-cn': "這隻寶可夢也受到10點傷害。"
		}
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card