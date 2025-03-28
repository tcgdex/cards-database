import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "Nのゾロア",
		'zh-tw': "N的索羅亞",
		'zh-cn': "N的索羅亞"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [570],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "相手の 姿に 化けてみせて 驚かせる。 無口な 子どもに 化けていることが 多いらしい。",
		'zh-tw': "會幻化成對手的樣子 嚇唬對方。似乎經常 幻化成沉默寡言的小孩。",
		'zh-cn': "會幻化成對手的樣子 嚇唬對方。似乎經常 幻化成沉默寡言的小孩。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ひっかく",
			'zh-tw': "抓",
			'zh-cn': "抓"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card