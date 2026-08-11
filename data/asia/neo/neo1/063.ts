import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "クリーフ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [35],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "doubleslap",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "二乗",
			},
			effect: {
				ja: "プレイ中のポケモンの総数に等しい多数のコインをひっくり返します。各ヘッドについて、デッキを検索して基本的なエネルギーカードを検索し、相手に見せて、手に渡すことができます。その後、デッキをシャッフルします。",
			},
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
