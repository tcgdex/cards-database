import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大尾狸"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "用樹幹和泥巴築起水壩，堵住河流建造住所。以勤勞而聞名。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "安心水壩"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在備戰區，自己的牌庫不會受到對手的招式・特性・物品・支援者的卡牌效果影響而丟棄牌庫。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "頭突"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card