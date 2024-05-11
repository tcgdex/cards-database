import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "索爾迦雷歐"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		'zh-tw': "在遙遠過去的文獻中，留有牠是吞食太陽之獸的相關紀錄。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "急奔"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在備戰區，則在自己的回合時可使用1次。將這隻寶可夢與自己的戰鬥寶可夢互換。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "日光噴湧"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張基本能量卡，附於1隻備戰寶可夢身上。"
		},

		damage: 100,
		cost: ["Colorless", "Colorless"]
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
	regulationMark: "E"
}

export default card