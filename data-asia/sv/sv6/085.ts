import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ハピナスex"
	},

	category: "Pokemon",
	rarity: "Double rare",
	illustrator: "Iwamoto05",
	hp: 300,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ハッピースイッチ"
		},

		effect: {
			ja: "自分の番に1回使える。自分の場のポケモンについている基本エネルギーを1個選び、自分の別のポケモンにつけ替える。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "おんがえし"
		},

		damage: 180,

		effect: {
			ja: "のぞむなら、自分の手札が6枚になるように、山札を引く。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4
}

export default card
