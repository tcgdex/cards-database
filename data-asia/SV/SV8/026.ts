import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ミロカロスex"
	},

	illustrator: "hncl",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きらめくウロコ"
		},

		effect: {
			ja: "このポケモンは、相手の「テラスタル」のポケモンからワザのダメージや効果を受けない。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ヒプノスプラッシュ"
		},

		damage: 160,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card