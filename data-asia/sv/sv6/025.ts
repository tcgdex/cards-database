import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ニョロボン"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Nisota Niso",
	dexId: [62],
	hp: 170,
	types: ["Water"],

	description: {
		ja: "発達した 手足を 使って ほんの 一瞬だけなら 水の上を 走ることができる。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "さいみんじゅつ"
		},

		effect: {
			ja: "相手のバトルポケモンをねむりにする。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ジャンピングアッパー"
		},

		damage: "120＋",

		effect: {
			ja: "のぞむなら、120ダメージ追加。その場合、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card
