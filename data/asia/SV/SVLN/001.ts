import { Card } from "../../../interfaces"
import Set from "../SVLN"

const card: Card = {
	set: Set,

	name: {
		ja: "マンタイン"
	},

	illustrator: "satoma",
	category: "Pokemon",
	dexId: [226],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "泳いで スピードが のってくると 波の上に 飛びだし そのまま １００メートルも 滑空 する。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "スプラッシュ"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "ウォーターダイブ"
		},

		effect: {
			ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card