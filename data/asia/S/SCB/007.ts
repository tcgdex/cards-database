import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "遠古巨蜓"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "能以６隻腳攫住成年人並輕鬆地飛行。以尾部的翅膀保持平衡。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "蟲咬"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "急降"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 120,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card