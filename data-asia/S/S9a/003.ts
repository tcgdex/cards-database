import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霸王花"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		'zh-tw': "身上那些全世界最大的花瓣會隨著牠的每個步伐搖動， 散播大量的毒花粉。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "超級吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "過敏性風暴"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，對手無法從手牌使出支援者卡。若為反面，則在下個對手的回合，對手無法從手牌使出物品卡。"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card