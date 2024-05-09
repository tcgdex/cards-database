import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ドダイトスex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "もりのこうしん"
		},

		damage: "30×",

		effect: {
			ja: "自分の場のポケモンの数×30ダメージ。"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "ジャングルハンマー"
		},

		damage: 150,

		effect: {
			ja: "このポケモンのHPを「50」回復する。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4
}

export default card