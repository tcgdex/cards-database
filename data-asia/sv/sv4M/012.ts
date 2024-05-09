import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノドクガ"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [994],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "捕獲例は ゼロ。 データ不足。 古い 書物に 記された 物体と 特徴が 一致。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "サーマルリアクター"
		},

		effect: {
			ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分の場のポケモンについているエネルギーを好きなだけ選び、このポケモンにつけ替える。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ねっせん"
		},

		damage: 120,

		effect: {
			ja: "次の自分の番、このポケモンは「ねっせん」が使えない。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card