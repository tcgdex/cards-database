import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "トゲキッス"
	},

	illustrator: "Cona Nitanda",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [468],
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "恵みを 与える 存在と 言われており 大昔から 縁起物に 描かれてきた。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "プレシャスギフト"
		},

		effect: {
			ja: "自分の番の終わりに1回使える。自分の手札が8枚になるように、山札を引く。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "パワーサイクロン"
		},

		damage: 110,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0
}

export default card