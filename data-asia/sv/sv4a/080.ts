import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラルトス",
		'zh-tw': "拉魯拉絲"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	dexId: [280],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "人の 感情を 頭の 赤い ツノで 敏感に キャッチする 力を 持つ。",
		'zh-tw': "擁有使用頭上的紅角就可以敏銳察覺 人類感情的能力。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "サイコショット",
			'zh-tw': "精神射擊"
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

	retreat: 1,
	regulationMark: "G"
}

export default card