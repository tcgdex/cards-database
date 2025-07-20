import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "ゆっくりと",
	},


	category: "Pokemon",
	dexId: [346],
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "進化の呼びかけ",
			},
			effect: {
				ja: "ターン中に、手からゆっくりと遊んでPokã©Monの1つを進化させると、基本的なPokã©MonまたはEvolution Cardsの任意の組み合わせでデッキを最大3で検索できます。それらを相手に見せて、あなたの手に入れてください。その後、デッキをシャッフルします。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				ja: "毒リング",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。防御するポケモンは、相手の次のターン中に退却することはできません。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
