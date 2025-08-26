import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "軽いアズマリル",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [184],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "バブル",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "バブルジャンプ",
			},
			effect: {
				ja: "ベンチ付きポケモンがある場合は、コインをひっくり返します。頭の場合は、2枚のエネルギーカードをライトアズマリルに取り付けて、ベンチ付きポケモン1枚に取り付けます。次に、ライトアズマリルとそれに取り付けられたすべてのカードを手に返します。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
