import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "スリープ",
		'zh-tw': "催眠貘"
	},

	illustrator: "Mousho",
	rarity: "Common",
	category: "Pokemon",
	dexId: [96],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "食べた夢は 全部 覚えている。 子どもの 夢のほうが 美味しいので めったに 大人の 夢は食べない。",
		'zh-tw': "能記住所有自己吃下的夢。由於小孩的夢更加美味， 因此幾乎不吃大人的夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "しねんのずつき",
			'zh-tw': "意念頭錘"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card