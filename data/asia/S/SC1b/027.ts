import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "以歐路普"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "以頭腦聰慧而聞名。大大的腦子是牠擁有出眾精神力量的證明。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "昆蟲雷達"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。查看對手的牌庫上方3張卡，以任意順序排列，放回牌庫上方。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "腦力波"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【超】能量的數量×30點傷害。"
		},

		damage: "90+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
