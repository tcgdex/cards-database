import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "クレッフィ"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	dexId: [707],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "昔の 貴族は 金庫の カギを 管理させる クレッフィを 代々 引き継ぎ 大切に 扱った。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いたずらロック"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、おたがいの場のたねポケモンの特性（「いたずらロック」をのぞく）は、すべてなくなる。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ねらいおとす"
		},

		damage: 10,

		effect: {
			ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card