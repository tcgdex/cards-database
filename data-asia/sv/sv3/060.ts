import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ホルード"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",
	dexId: [660],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "お腹の 体毛は 保温性に 優れる。 昔の 人は 抜けた 体毛で 防寒着を つくった。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "どろかけ"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ノックハンマー"
		},

		damage: 120,

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4
}

export default card