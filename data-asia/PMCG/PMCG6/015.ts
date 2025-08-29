import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "Koga's Koffing（u）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [109],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "煙幕",
			},
			effect: {
				ja: "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "ガスを覆い隠します",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、コガのコフィンをシャッフルし、すべてのカードがデッキに取り付けられています（ダメージを与えた後）。",
			},
			damage: 30,
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
