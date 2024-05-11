import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小獅獅",
		ja: "シシコ"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "血氣方剛且好奇心旺盛。 當牠生氣或是開始戰鬥時， 短短的鬃毛就會變熱。",
		ja: "血気盛んで 好奇心旺盛。 怒ったり 戦いが 始まると 短い たてがみは 熱くなる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "灼熱",
			ja: "こがす"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			ja: "相手のバトルポケモンをやけどにする。"
		},

		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [667]
}

export default card