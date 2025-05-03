import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ノココッチex"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぎゃっきょうテール"
		},

		damage: "60×",

		effect: {
			ja: "相手の場の「ポケモンex」の数×60ダメージ。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ドリルブレイク"
		},

		damage: 150,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card