import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "厄鬼椪 碧草面具ex"
	},

	illustrator: "Yano Keiji",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "碧綠之舞"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次。從自己的手牌選擇1張「基本【草】能量」卡，附於這隻寶可夢身上。然後，從自己的牌庫抽出1張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "萬葉陣雨"
		},

		effect: {
			'zh-tw': "增加雙方的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
		},

		damage: "30+",
		cost: ["Grass", "Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card