import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ボスゴドラ"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Dsuke",
	dexId: [306],
	hp: 180,
	types: ["Metal"],

	description: {
		ja: "ぶ厚い 鉄板を 貫くほどの 鋭い ツノを 体当たりとともに くらわせて 敵を しとめる。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "アングリースラム"
		},

		damage: "50×",

		effect: {
			ja: "自分の場のダメカンがのっているポケモンの数×50ダメージ。"
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "ガードクロー"
		},

		damage: 120,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 3
}

export default card
