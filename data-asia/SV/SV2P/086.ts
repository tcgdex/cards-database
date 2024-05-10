import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤドキングex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "うんちく"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ウィズダムヘッド"
		},

		damage: 130,

		effect: {
			ja: "のぞむなら、自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。"
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

	retreat: 3
}

export default card