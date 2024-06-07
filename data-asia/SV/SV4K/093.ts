import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "トドロクツキex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "くるいえぐる"
		},

		effect: {
			ja: "相手のバトルポケモンをきぜつさせる。その後、このポケモンに200ダメージ。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "カラミティストーム"
		},

		damage: "100＋",

		effect: {
			ja: "のぞむなら、場に出ているスタジアムをトラッシュする。その場合、120ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card