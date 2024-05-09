import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "フーディンex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "マインドジャック"
		},

		damage: "90＋",

		effect: {
			ja: "相手のベンチポケモンの数×30ダメージ追加。"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ディメンションハンド"
		},

		damage: 120,

		effect: {
			ja: "このワザは、このポケモンがベンチにいても使える。"
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

	retreat: 1
}

export default card