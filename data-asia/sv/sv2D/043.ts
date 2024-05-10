import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ケケンカニ",
		'zh-tw': "好勝毛蟹"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [740],
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "もげた ハサミは とても 美味しい。 わざわざ 山に グルトンを 連れて 探しにくる トレーナーも いるぞ。",
		'zh-tw': "脫落的鉗子十分美味。還有些訓練家會特地 帶著愛吃豚到山裡找牠。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "がちんこ",
			'zh-tw': "正面對決"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ナックルインパクト",
			'zh-tw': "關節衝擊"
		},

		damage: 170,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card