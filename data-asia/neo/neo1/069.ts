import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "ミルタンク",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [241],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ミルクドリンク",
			},
			effect: {
				ja: "2つのコインをフリップします。 2つのダメージカウンターを削除して、Miltankからヘッド数の時間を削除します。それよりもダメージカウンターが少ない場合は、それらすべてを削除します。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ボディスラム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
