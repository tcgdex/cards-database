import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "forretress",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [205],
	hp: 70,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "スパイクシェル",
			},
			effect: {
				ja: "対戦相手の次のターンの終わりに、防御ポケモンに3つのダメージカウンターを置きます。",
			},
			damage: 20,
		},
		{
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ポップ",
			},
			effect: {
				ja: "forretressに7つのダメージカウンターを置きます。 forretressに取り付けられたすべてのエネルギーカードをベンチポケモンに移動します。 （ベンチ付きポケモンがない場合は、この効果を無視してください。）",
			},
			damage: 100,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
