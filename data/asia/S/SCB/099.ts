import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "堅盾劍怪"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		'zh-tw': "雖然帶著堅盾劍怪的國王曾經支配了整個國家，最後卻被牠吸走了精氣，國家也滅亡了。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "戰鬥切換"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的手牌選擇1張「堅盾劍怪」卡，與這張卡互換（所附加的卡・傷害指示物・特殊狀態・效果等全部保留）。將這張卡放回手牌。"
		}
	}, {
		name: {
			'zh-tw': "全金屬利刃"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的【鋼】能量，將其丟棄。"
		},

		damage: 210,
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

	retreat: 3,
	regulationMark: "E"
}

export default card