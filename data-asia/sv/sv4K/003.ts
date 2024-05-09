import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "マラカッチ"
	},

	illustrator: "Masako Tomii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [556],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "１年に 一度 種を まく。 花の 種は 栄養満点で 砂漠の 貴重な 食料。"
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
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ミサイルばり"
		},

		damage: "30×",

		effect: {
			ja: "コインを4回投げ、オモテの数×30ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card