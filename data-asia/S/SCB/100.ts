import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "堅盾劍怪"
	},

	illustrator: "Naoyo Kimura",
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
			'zh-tw': "巨烈猛擊"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到「寶可夢【VMAX】」招式的傷害。"
		},

		damage: 70,
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

	retreat: 3,
	regulationMark: "E"
}

export default card