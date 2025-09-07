import { Card } from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "staryu",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [120],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "エネルギーヒーリング",
			},
			effect: {
				ja: "それに取り付けられた各エネルギーについて、Staryuから2つのダメージカウンターを削除します。それよりもダメージカウンターが少ない場合は、それらすべてを削除します。",
			},
		},
		{
			cost: ["Water"],
			name: {
				ja: "doubleslap",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
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

export default card
