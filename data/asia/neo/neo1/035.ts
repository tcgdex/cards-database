import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "キングドラ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [230],
	hp: 90,
	types: ["Water"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "敏ility性",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、Kingdraに行われたダメージを含む攻撃のすべての影響を防ぎます。",
			},
			damage: 30,
		},
		{
			cost: ["Water", "Water", "Water", "Water"],
			name: {
				ja: "ドラゴン・トルネード",
			},
			effect: {
				ja: "この攻撃が防御ポケモンをノックアウトしない場合、そして対戦相手のベンチにポケモンがある場合は、それらの1つを選択して、防御ポケモンで切り替えます。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
