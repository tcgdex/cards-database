import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ジュペッタex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "とこやみ"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、相手は手札からグッズを出して使えない。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ポルターガイスト"
		},

		damage: "60×",

		effect: {
			ja: "相手の手札を見て、その中にあるトレーナーズの枚数×60ダメージ。"
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

	retreat: 2,

	thirdParty: {
		cardmarket: 693116
	}
}

export default card