import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "姆克鷹"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "變成姆克鷹後，就會脫離群體獨自生活。 擁有強韌的翅膀。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "捲風"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢與附加的卡，全部放回對手的牌庫並重洗。"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "旋轉鳥擊"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card