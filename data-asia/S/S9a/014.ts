import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水晶燈火靈"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		'zh-tw': "住在古老的洋樓裡。詭異地搖晃手臂上的火焰， 以此來催眠對手。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "炙山"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。將對手的牌庫上方3張卡丟棄。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "高溫爆破"
		},

		damage: 90,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card