import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ノココッチ"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [982],
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "硬い 尻尾で 地中 深くの 岩盤を くり抜き 巣を 作る。 巣穴は 長さ１０キロに およぶ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "にげあしドロー"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札を3枚引く。その後、このポケモンと、ついているすべてのカードを、山札にもどして切る。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ランドクラッシュ"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card