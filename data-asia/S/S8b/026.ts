import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "刺龍王"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		'zh-tw': "據說牠會沉睡在任何生物都無法潛到的深海底部積蓄力量。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "海底霸主"
		},

		effect: {
			'zh-tw': "每次當自己的戰鬥寶可夢受到對手的寶可夢招式的傷害而【氣絕】時，可使用1次。選擇【氣絕】的寶可夢身上附加的任意數量的【水】能量，改附於這隻寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "水暴流"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上附加的【水】能量的數量×40點傷害。"
		},

		damage: "40×",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card