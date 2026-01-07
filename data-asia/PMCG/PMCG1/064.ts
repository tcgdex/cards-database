import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [137],
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "変換1",
			},
			effect: {
				ja: "防御するポケモンが弱点を持っている場合、それを無色の以外の選択の種類に変更することができます。",
			},

		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "変換2",
			},
			effect: {
				ja: "Porygonの抵抗は、無色の以外の選択の種類に変更します。",
			},

		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],

	related: [
		{
			type: "translation",
			cardPath: "data/Base/Base Set/39.ts"
		}
	]
};

export default card
