import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "舞天鵝"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "舞天鵝們會隨著黎明起舞。在正中間跳舞的就是群體的首領。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "天空雜耍"
		},

		effect: {
			'zh-tw': "在這個回合，若從自己的手牌使出了「養鳥人」，則這隻寶可夢使用招式所需的能量全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "羽毛斬"
		},

		effect: {
			'zh-tw': "若希望，選擇1張自己的手牌，將其丟棄。這個情況下，增加70點傷害。"
		},

		damage: "70+",
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

	retreat: 0,
	regulationMark: "D"
}

export default card
