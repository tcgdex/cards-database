import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "マケンカニ",
		'zh-tw': "好勝蟹"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [739],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "木を 殴りつけ 木の実を 落として 食べる。 トレーニングしつつ エサも 採れて 一石二鳥 なのだ。",
		'zh-tw': "會擊落樹上的樹果來吃。訓練和覓食都能同時達成， 簡直可以說是一舉兩得。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "げんこつ",
			'zh-tw': "拳骨"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "マグナムパンチ",
			'zh-tw': "增量拳"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card