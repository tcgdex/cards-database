import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ダブラン"
	},

	illustrator: "mele",
	rarity: "Common",
	category: "Pokemon",
	dexId: [578],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "２つの 脳みその 意見が 一致したときの 念力は 周囲１キロに およぶと いう。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ダブルトリック"
		},

		damage: "30×",

		effect: {
			ja: "コインを2回投げ、オモテの数×30ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2
}

export default card