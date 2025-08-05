import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "Girafarig",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [203],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "エネルギーパッチ",
			},
			effect: {
				ja: "ポケモンの1つに取り付けられた基本的なエネルギーカードを取り、ポケモンのもう1つに取り付けます。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "シンクロブラスト",
			},
			effect: {
				ja: "Girafarigと防御ポケモンに同じ数のエネルギーカードが付いていない場合、この攻撃の基本ダメージは40ではなく10です。",
			},
			damage: 40,
		},
	],

	retreat: 1,

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
