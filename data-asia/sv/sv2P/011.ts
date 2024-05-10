import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アノクサ",
		'zh-tw': "納噬草"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [946],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "成仏できない 魂が 風に 吹かれているうち 枯草を 巻き込んで ポケモンになった。",
		'zh-tw': "無法升天的靈魂在風的吹拂下被捲進枯草裡， 變成了寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ちょっとすいとる",
			'zh-tw': "吸取一下"
		},

		damage: 10,

		effect: {
			ja: "このポケモンのHPを「10」回復する。",
			'zh-tw': "將這隻寶可夢恢復「10」HP。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card