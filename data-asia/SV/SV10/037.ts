import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>催眠貘",
		'zh-cn': "<火箭隊的>催眠貘",
		ja: "ロケット団のスリープ"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "能記住所有自己吃下的夢。 由於小孩的夢更加美味， 因此幾乎不吃大人的夢。",
		'zh-cn': "能記住所有自己吃下的夢。 由於小孩的夢更加美味， 因此幾乎不吃大人的夢。",
		ja: "食べた夢は 全部 覚えている。 子どもの 夢のほうが 美味しいので めったに 大人の 夢は食べない。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "催眠光線",
			'zh-cn': "催眠光線",
			ja: "さいみんこうせん"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			'zh-cn': "將對手的戰鬥寶可夢【睡眠】。",
			ja: "相手のバトルポケモンをねむりにする。"
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [96]
}

export default card