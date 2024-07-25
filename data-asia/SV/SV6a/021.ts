import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "克雷色利亞"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "飛行時，會從薄紗般的翅膀 發出閃亮的粒子。 被稱為新月的化身。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "治癒之舞"
		},

		effect: {
			'zh-tw': "將自己的所有寶可夢各恢復「20」HP。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "弦月光芒"
		},

		effect: {
			'zh-tw': "若希望，選擇1張自己的反面朝上的獎賞卡，翻到正面。這個情況下，增加80點傷害。（在對戰結束前，那張獎賞卡維持正面朝上。）"
		},

		damage: "80+",
		cost: ["Psychic", "Psychic", "Psychic"]
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
	regulationMark: "H",
	rarity: "Rare"
}

export default card