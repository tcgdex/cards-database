import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ボルトロス"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	dexId: [642],
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "大空を 飛び回りながら あちこちに 雷を 落として 山火事を 起こすので 嫌われる。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "あくてんこう"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、自分のベンチポケモン全員は、相手のワザのダメージを受けない。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "ギガントボルト"
		},

		damage: 140,

		effect: {
			ja: "このポケモンにも90ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card