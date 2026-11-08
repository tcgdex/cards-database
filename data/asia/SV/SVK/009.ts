import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ピジョットex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "マッハサーチ"
		},

		effect: {
			'ja-jp': "自分の番に1回使える。自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。この番、すでに別の「マッハサーチ」を使っていたなら、この特性は使えない。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ふきすさぶ"
		},

		damage: 120,

		effect: {
			'ja-jp': "のぞむなら、場に出ているスタジアムをトラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 0,
	rarity: "None"
}

export default card