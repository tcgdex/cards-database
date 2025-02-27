import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "テッポウオ",
		'zh-tw': "鐵炮魚",
		'zh-cn': "鐵炮魚"
	},

	illustrator: "Minahamu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [223],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "吸盤の ように 変化した 背びれで マンタインに くっつき 食べ残しを わけてもらっている。",
		'zh-tw': "會用變成吸盤狀的背鰭 吸附在巨翅飛魚身上， 吃牠平常吃剩下的東西。",
		'zh-cn': "會用變成吸盤狀的背鰭 吸附在巨翅飛魚身上， 吃牠平常吃剩下的東西。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "じたばた",
			'zh-tw': "抓狂",
			'zh-cn': "抓狂"
		},

		damage: "10×",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージ。",
			'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			'zh-cn': "造成這隻寶可夢身上放置的傷害指示物的數量×10點傷害。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "みずかけ",
			'zh-tw': "潑水",
			'zh-cn': "潑水"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card