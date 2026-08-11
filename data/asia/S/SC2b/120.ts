import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "波克基斯VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Colorless"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "極巨滑行"
		},

		effect: {
			'zh-tw': "若希望，從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。"
		},

		damage: 120,
		cost: ["Colorless", "Colorless"]
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
