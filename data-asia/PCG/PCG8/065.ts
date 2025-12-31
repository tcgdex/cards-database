import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "レイロン",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [305],
	hp: 80,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ro音",
			},
			effect: {
				ja: "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。",
			},
		},
		{
			cost: ["Metal", "Colorless", "Colorless"],
			name: {
				ja: "金属電荷",
			},
			effect: {
				ja: "ライロンに1つのダメージカウンターを置きます。",
			},
			damage: 50,
		},
	],

	retreat: 2,

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
