import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "ドロージー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [96],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "スリープインデューサー",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、対戦相手のベンチポケモンの1つを選択し、防御ポケモンをそれで切り替えます。新しい防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "取り組む",
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
			stamp: ["1st edition"],
		},
	],
};

export default card
