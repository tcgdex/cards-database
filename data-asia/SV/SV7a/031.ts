import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "投擲猴",
		'zh-cn': "投擲猴",
		ja: "ナゲツケサル"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "老大會選出１０隻出外狩獵， 並把牠們帶回來的食物 平均分配給群體內的夥伴。",
		'zh-cn': "老大會選出１０隻出外狩獵， 並把牠們帶回來的食物 平均分配給群體內的夥伴。",
		ja: "ボスが 選んだ １０匹で 狩りに 出かけ 取ってきた エサを 群れの 仲間で 平等に 分け合う。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "聯合投擲",
			'zh-cn': "聯合投擲",
			ja: "れんけいスロー"
		},

		effect: {
			'zh-tw': "造成自己的場上的【基礎】寶可夢的數量×20點傷害。",
			'zh-cn': "造成自己的場上的【基礎】寶可夢的數量×20點傷害。",
			ja: "自分の場のたねポケモンの数×20ダメージ。"
		},

		damage: "20×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [766]
}

export default card