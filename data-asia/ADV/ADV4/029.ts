import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "グラリー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [362],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "氷の壁",
			},
			effect: {
				ja: "相手のポカモンからの攻撃によってグラリーに与えられた損害は、それに取り付けられた特別なエネルギーカードが40減少します（脱力感と抵抗を適用した後）。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "重いブリザード",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、相手のベンチポケモンのそれぞれに1つのダメージカウンターを入れます。",
			},
			damage: 50,
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
