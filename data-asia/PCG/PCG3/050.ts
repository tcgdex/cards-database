import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ピロスワイン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [221],
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "寒い",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御する各ポケモンは、相手の次のターン中に攻撃することはできません。",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				ja: "トン数",
			},
			effect: {
				ja: "60ダメージに加えて、さらに40ダメージを与えることができます。もしそうなら、Piloswineはそれ自体に30のダメージを与えます。",
			},
		},
	],

	retreat: 2,

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

export default card
