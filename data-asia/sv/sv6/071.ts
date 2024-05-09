import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "アラブルタケ"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "danciao",
	dexId: [986],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "ある本の中で アラブルタケと 記されていた 生物は このポケモンの 可能性がある。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "どくをとばす"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			ja: "まくしなぐる"
		},

		damage: "50＋",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×50ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card
