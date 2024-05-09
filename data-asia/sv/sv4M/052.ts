import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "エテボース"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [424],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "なにを するにも シッポを 使う。 ２本の シッポで 抱きしめられたら 本当に 懐かれた 証。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "もってくる"
		},

		effect: {
			ja: "自分の山札を2枚引く。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ハンドスリング"
		},

		damage: "20×",

		effect: {
			ja: "自分の手札の枚数×20ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card