import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラティオス"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	dexId: [381],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "高い 知能を 持つ ポケモン。 腕を 折りたたんで 飛べば ジェット機を 追い越す スピードだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ちょくげきひこう"
		},

		effect: {
			ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "ジェットヘッド"
		},

		damage: 110
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
	rarity: "None",

	thirdParty: {
		cardmarket: 787580
	}
}

export default card