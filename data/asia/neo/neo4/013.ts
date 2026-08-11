import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "輝くセレビ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [251],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "癒しの水",
			},
			effect: {
				ja: "輝くセレビに接続された水エネルギーカードの数に等しい1枚のベンチポケモンから多くのダメージカウンターを削除します。ポケモンのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
			},
		},
		{
			cost: ["Grass", "Psychic"],
			name: {
				ja: "奇跡の葉",
			},
			effect: {
				ja: "防御ポケモンに取り付けられたエネルギーの数に等しい多数のコインをひっくり返します。 1つ以上の頭を手に入れると、防御するポケモンは眠っている、混乱し、毒されています（あなたの選択）。",
			},
			damage: 10,
		},
	],

	retreat: 1,

};

export default card
