import { Card } from "../../../interfaces"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "櫻花兒",
		ja: "チェリム"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "盛開的花瓣中散發出的微微香氣會吸引蟲寶可夢聚集而來。",
		ja: "満開の 花びら から ただよう かすかな 香りが 虫ポケモンを 集める。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "春爛漫",
			ja: "はるらんまん"
		},

		effect: {
			'zh-tw': "在自己的回合時，可不限次數使用。從自己的手牌選擇1張【草】能量卡，附於自己的寶可夢（「擁有規則的寶可夢」除外）身上。",
			ja: "自分の番に何回でも使える。自分の手札からエネルギーを1枚選び、自分のポケモン（「ルールを持つポケモン」をのぞく）につける。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "種子炸彈",
			ja: "タネばくだん"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	dexId: [421]
}

export default card