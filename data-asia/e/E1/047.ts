import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "チャンジー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [113],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "傷を結合します",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、ポケモンの1つから2つのダメージカウンターを削除します（1つしかない場合）。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ドッグパイル",
			},
			effect: {
				ja: "ベンチにポケモンの数を数えます。この攻撃は、ディフェンディングポケモンにその数のダメージを10倍も行い、チャンジーはそれ自体にその数のダメージ数を10倍も行います。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
