import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴースト"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	dexId: [93],
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "暗闇にまぎれ ガスの手を 伸ばし 人の肩を 叩くのが 好き。 触られると 震えが 止まらない。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "どくのいき"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをどくにする。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card