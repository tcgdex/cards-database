import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "gardevoir",
	},


	category: "Pokemon",
	dexId: [282],
	hp: 100,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "Psy Shadow",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度（攻撃の前）、デッキをサイキックエネルギーカードに検索し、1つのPokã©Monに添付することができます。  そのポカンに2つのダメージカウンターを置きます。  その後、デッキをシャッフルします。  Gardevoirが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "エネルギーバースト",
			},
			effect: {
				ja: "Gardevoirと防御ポケモンに付随するエネルギーの総量を10回ダメージします。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
