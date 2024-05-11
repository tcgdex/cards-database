import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "古月鳥VMAX"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "極巨噴射"
		},

		effect: {
			'zh-tw': "擲與這隻寶可夢身上附加的能量的數量相同次數的硬幣，造成正面出現的次數×80點傷害。"
		},

		damage: "80×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card