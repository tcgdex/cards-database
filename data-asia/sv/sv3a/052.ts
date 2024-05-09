import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "モトトカゲ"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [967],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "大昔から 人を 背中に 乗せていたらしい。 １万年前の 壁画に 様子が 描かれている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぶつかる"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "バディドライブ"
		},

		damage: "70＋",

		effect: {
			ja: "この番、手札からサポートを出して使っていたなら、70ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card