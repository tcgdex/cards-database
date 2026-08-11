import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ミスティのquagsire",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [195],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ヘッドバット",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "ハグ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に退却することはできません。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
