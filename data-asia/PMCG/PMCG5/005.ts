import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのベルスプラウト（lv.15）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [69],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "不注意なタックル",
			},
			effect: {
				ja: "エリカのベルスプラウトは、それ自体に10ダメージを与えます。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
