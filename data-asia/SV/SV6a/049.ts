import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貓老大"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "性情凶暴，豎起尾巴時 要多加小心。那是牠將 飛撲過來咬你的前兆。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "亂抓"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×50點傷害。"
		},

		damage: "50×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "利爪揮砍"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common"
}

export default card