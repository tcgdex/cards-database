import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "サダイジャ"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [844],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "体を 目一杯 伸縮させ ダンプカーも 押し流すほどの 勢いで 砂を 噴射する。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ロケットずつき"
		},

		damage: 120
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			ja: "さじんふんしゃ"
		},

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。その後、相手のバトルポケモンと、ついているすべてのカードを、相手の山札にもどして切る。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card