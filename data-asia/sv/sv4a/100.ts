import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "マンキー",
		'zh-tw': "猴怪"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	dexId: [56],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "普段は 機嫌が 良くても ちょっとしたことで いきなり 暴れだすから 怖いのだ。",
		'zh-tw': "平時就算心情再怎麼好，也會因為一點芝麻小事 而突然暴怒，令人害怕。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "さるなぐり",
			'zh-tw': "猴打擊"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card