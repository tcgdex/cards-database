import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "堅果啞鈴"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "用尖刺刺裂岩壁之後，牠會用觸手的尖端接觸裂縫吸收營養。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "三重粉碎"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×30點傷害。"
		},

		damage: "30×",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "能量摑擊"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢身上附加的能量，全部改附於1隻備戰寶可夢身上。"
		},

		damage: 100,
		cost: ["Metal", "Metal", "Colorless"]
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
	regulationMark: "D"
}

export default card
