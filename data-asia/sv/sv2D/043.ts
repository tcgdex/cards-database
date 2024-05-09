import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ケケンカニ"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [740],
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "もげた ハサミは とても 美味しい。 わざわざ 山に グルトンを 連れて 探しにくる トレーナーも いるぞ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "がちんこ"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ナックルインパクト"
		},

		damage: 170,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 4
}

export default card