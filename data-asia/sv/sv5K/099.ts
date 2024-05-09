import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ウネルミナモex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "こんぺきはとう"
		},

		effect: {
			ja: "このポケモンが使うワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "カタルシスロアー"
		},

		damage: "120＋",

		effect: {
			ja: "相手のバトルポケモンが特殊状態なら、120ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card