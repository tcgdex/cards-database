import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "イルミーゼ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Orca",
	dexId: [314],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "バルビートを 誘導して 夜空に サインを 描く。 サインの 意味を 研究する 学者も いる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "スローパフューム"
		},

		effect: {
			ja: "このワザは、後攻プレイヤーの最初の番にだけ使える。相手のベンチポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、相手の山札にもどして切る。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "かっくう"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card
