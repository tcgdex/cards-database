import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "アルタリア",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [334],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ドラゴンダンス",
			},
			effect: {
				ja: "次のターン中に、現在のアクティブなポケモンのいずれかが防御ポケモンにダメージを与えた場合、攻撃は40個のダメージを与えます（脱力感と抵抗を適用する前に）。",
			},
		},
		{
			cost: ["Water", "Lightning"],
			name: {
				ja: "ドラゴンソング",
			},
			effect: {
				ja: "防御するポケモンはそれぞれ眠っています。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};
