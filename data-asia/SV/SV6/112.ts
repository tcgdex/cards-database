import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "米立龍"
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		'zh-tw': "極為奸詐狡猾的寶可夢。 會假裝虛弱來吸引獵物接近， 接著讓同夥的寶可夢發動攻擊。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "集客"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。查看自己的牌庫上方6張卡，從其中選擇1張支援者卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "衝浪"
		},

		damage: 50,
		cost: ["Fire", "Water"]
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card