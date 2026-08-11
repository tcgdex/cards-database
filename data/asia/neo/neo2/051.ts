import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "ウルサリング",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [217],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ヘッドプレス",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、この攻撃は何もしません（ダメージさえありません）。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ダブルラリアット",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
