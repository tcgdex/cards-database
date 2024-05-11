import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "金屬怪"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		'zh-tw': "由２隻鐵啞鈴以磁力結合而成。因為有２個大腦， 精神力量也強化成２倍了。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "子彈拳"
		},

		effect: {
			'zh-tw': "擲2次硬幣，增加正面出現的次數×30點傷害。"
		},

		damage: "30+",
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card