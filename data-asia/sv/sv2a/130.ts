import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ギャラドス"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 190,
	types: ["Water"],

	description: {
		ja: "一度 姿を 現すと まわりを すべて 焼き尽くさないと 怒りが 鎮まらない という。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "あらくれもの"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、必ず1回使う。自分の山札を上から5枚トラッシュする。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "はかいこうせん"
		},

		damage: 200,

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4
}

export default card