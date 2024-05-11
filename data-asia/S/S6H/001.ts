import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪笠怪"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "雪笠怪肚子上結出來的樹果口感彷如冰棒，是伽勒爾的火紅不倒翁們的最愛。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "前往拿取"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張訓練家卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "窮追不捨"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 40,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card