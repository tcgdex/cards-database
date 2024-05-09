import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カメックスex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かたいこうら"
		},

		effect: {
			ja: "このポケモンが受けるワザのダメージは「-30」される。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "ツインカノン"
		},

		damage: "140×",

		effect: {
			ja: "自分の手札から「基本エネルギー」を2枚までトラッシュし、その枚数×140ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card