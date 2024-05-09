import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サワムラー"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [106],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "脚が 自由に 伸び縮みして 遠く 離れている 場合でも 相手を 蹴り上げることが できる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "トルネードキック"
		},

		effect: {
			ja: "相手のポケモン全員に、それぞれ10ダメージ。このポケモンをベンチポケモンと入れ替える。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "けたぐり"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card