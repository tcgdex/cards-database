import { Card } from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		ja: "Lickitung（デルタ種）",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [108],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ラップアップ",
			},
			effect: {
				ja: "2枚のカードを描きます。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				ja: "デルタマインド",
			},
			effect: {
				ja: "相手のポケモンの1つに1つのダメージカウンターを置きます。そのポケモンがカードにDがある場合は、代わりに3つのダメージカウンターを入れます。",
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
