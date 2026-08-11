import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "Girafarig",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [203],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "敏ility性",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、Girafarigに行われたダメージを含む攻撃のすべての影響を防ぎます。",
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "PSYBEAM",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
