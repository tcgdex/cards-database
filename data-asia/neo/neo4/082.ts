import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "輝くタイラニター",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [248],
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness", "Fighting", "Fighting"],
			name: {
				ja: "マウンテンクラッシュ",
			},
			effect: {
				ja: "尾がなくなるまでコインをひっくり返します。各ヘッドについて、相手は彼または彼女のデッキからトップカードを破棄します。",
			},
			damage: 30,
		},
		{
			cost: ["Darkness", "Fire", "Fire", "Fire"],
			name: {
				ja: "破壊的な火",
			},
			effect: {
				ja: "輝くタイラニターに取り付けられた各火エネルギーカードのコインをひっくり返します。それぞれの頭について、輝くタイラニターに取り付けられた消防エネルギーカードを捨てるか、この攻撃は何もしません。次に、ヘッドごとに、防御ポケモンに取り付けられたエネルギーカードを選択して廃棄します。それよりも少ないエネルギーカードがある場合は、それらすべてを捨ててください。",
			},
			damage: 50,
		},
	],

	retreat: 3,

};

export default card
