import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ピチュ-114/128",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [172],
	hp: 30,
	types: ["Lightning"],
	stage: "Baby",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "エネルギーパッチ",
			},
			effect: {
				ja: "ポケモンの1つに取り付けられた基本的なエネルギーカードを取り、ポケモンのもう1つに取り付けます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
