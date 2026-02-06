import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "隨風球",
		'zh-cn': "隨風球",
		ja: "フワライド"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "會搬運人和寶可夢。 但由於牠只能隨風漂流， 因此無法自行決定目的地。",
		'zh-cn': "會搬運人和寶可夢。 但由於牠只能隨風漂流， 因此無法自行決定目的地。",
		ja: "人や ポケモンを 運ぶ。 ただし 風に 流されてしまうので 行き先を 決められない。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "一同爆炸",
			'zh-cn': "一同爆炸",
			ja: "みんなでばくはつ"
		},

		effect: {
			'zh-tw': "造成自己的場上的「飄飄球」與「隨風球」的數量×50點傷害。自己的場上的所有「飄飄球」與「隨風球」也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "造成自己的場上的「飄飄球」與「隨風球」的數量×50點傷害。自己的場上的所有「飄飄球」與「隨風球」也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "自分の場の「フワンテ」と「フワライド」の数×50ダメージ。自分の場の「フワンテ」と「フワライド」全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		damage: "50×",
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
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [426],

	thirdParty: {
		cardmarket: 779055
	}
}

export default card