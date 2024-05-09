import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルキア"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [484],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "空間を ゆがめる 能力を 持ち シンオウ地方の 神話では 神様として 描かれている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "テレポートブレイク"
		},

		damage: 30,

		effect: {
			ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "サイドカウンター"
		},

		damage: "80＋",

		effect: {
			ja: "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、80ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card