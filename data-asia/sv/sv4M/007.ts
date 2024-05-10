import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ノノクラゲ",
		'zh-tw': "原野水母"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [948],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "メノクラゲに 似ているが まったく 別の 種類。 脚は 細いが 走りだせば 時速５０キロになる。",
		'zh-tw': "看起來像瑪瑙水母，其實是截然不同的種類。雖然腳很細，但跑起來能達到時速５０公里。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "キック",
			'zh-tw': "踢"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "すいとる",
			'zh-tw': "吸取"
		},

		damage: 40,

		effect: {
			ja: "このポケモンのHPを「20」回復する。",
			'zh-tw': "將這隻寶可夢恢復「20」HP。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card