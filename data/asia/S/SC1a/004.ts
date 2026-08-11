import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "頑皮雷彈"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "擁有被電力吸引的特質。主要聚集在發電廠吃剛產出的電力，是一群令人頭疼的傢伙。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "集球"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "滾球攻擊"
		},

		damage: 70,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "D"
}

export default card