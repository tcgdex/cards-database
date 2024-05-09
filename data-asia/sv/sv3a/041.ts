import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "フォクスライ"
	},

	illustrator: "SIE NANAHARA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [828],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "身軽な 体と 鋭い ツメで エサや タマゴを 盗んで まわる。 パルスワンが 天敵。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ひったくり"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手の手札を見て、その中からエネルギーを2枚選び、相手の山札にもどして切る。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ツメできりさく"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card