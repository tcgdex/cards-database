import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤクデ"
	},

	illustrator: "Minahamu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [850],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "体に 溜めた 可燃ガスで 発熱。 とくに お腹の 黄色い 部分が 熱いのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ひだね"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ひっかける"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card