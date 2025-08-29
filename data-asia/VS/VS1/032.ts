import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "JasmineのSteelix",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [208],
	hp: 80,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "バインド",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "鉄の尾",
			},
			effect: {
				ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],

	retreat: 4,

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
