import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "托戈德瑪爾"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		'zh-tw': "在危急時刻會把身體捲成一團、倒豎起背上的尖刺， 不分青紅皂白地發出電擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "變圓"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "滾動衝撞"
		},

		damage: 50,
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

	retreat: 1,
	regulationMark: "G"
}

export default card