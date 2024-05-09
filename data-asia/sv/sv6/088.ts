import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "コアルヒー"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Shibuzoh.",
	dexId: [580],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "エサの 水苔を 探し 池の 深い場所を 泳ぎまわりながら 体を 鍛えているのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ダブルドロー"
		},

		effect: {
			ja: "自分の山札を2枚引く。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "するどいはね"
		},

		damage: 20
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
