import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多邊獸Ｚ"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		'zh-tw': "新追加的程式大有問題，做出的動作明顯地有些怪異。實驗或許可說是失敗了。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "漏洞傳輸"
		},

		effect: {
			'zh-tw': "在自己的回合，每次從自己的手牌將能量附於這隻寶可夢身上時，都可使用1次。將對手的戰鬥寶可夢【混亂】。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "超級光束"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 170,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card