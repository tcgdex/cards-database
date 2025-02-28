import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "オンバット"
	},

	illustrator: "sowsow",
	rarity: "None",
	category: "Pokemon",
	dexId: [714],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "大きな 耳から 超音波を 出して エサの 果物を 探す。 カジッチュを エサと 間違える。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "クイックドロー"
		},

		damage: 10,

		effect: {
			ja: "自分の山札を1枚引く。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card