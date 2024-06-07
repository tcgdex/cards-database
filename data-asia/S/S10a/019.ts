import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮皮"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "能夠在滿月夜裡的靜謐山間遇見牠。小小翅膀綻放著微光，那舞動的 身姿如同妖精般惹人憐愛。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "月見派對"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。附給自己的備戰區的所有「皮皮」各1張牌庫的【超】能量卡。並且重洗牌庫。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "奇跡風暴"
		},

		effect: {
			'zh-tw': "造成自己的場上寶可夢身上附加的【超】能量的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card