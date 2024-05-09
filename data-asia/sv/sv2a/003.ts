import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "フシギバナex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "やすらぎのはな"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分のポケモン1匹のHPを「60」回復する。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "もうどくウィップ"
		},

		damage: 150,

		effect: {
			ja: "相手のバトルポケモンをどくとこんらんにする。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4
}

export default card