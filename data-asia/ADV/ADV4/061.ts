import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "Igglybuff",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [174],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "赤ちゃんの進化",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、Jigglypuffを手からIgglybuff（これは進化するIgglybuffとしてカウント）に置き、Igglybuffからすべてのダメージカウンターを削除することができます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "曲をセットします",
			},
			effect: {
				ja: "デッキを検索して、基本的なポケモンと基本的なエネルギーカードを探し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
