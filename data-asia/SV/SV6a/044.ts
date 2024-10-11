import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "キバゴ"
	},

	illustrator: "Orca",
	rarity: "Common",
	category: "Pokemon",
	dexId: [610],
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "岩や 樹木に 独特の 歯形を 見かけたら 近くに キバゴが 棲んでいるはずだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ひっかく"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Metal"],

		name: {
			ja: "するどいキバ"
		},

		damage: 30
	}],

	retreat: 2
}

export default card