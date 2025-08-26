import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ウィージング-101/128",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [110],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "ファウルガス",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。尾の場合、防御ポケモンは混乱しています。",
			},
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				ja: "失火",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、ウィージングに6つのダメージカウンターを入れます。",
			},
			damage: 60,
		},
	],

	retreat: 2,

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
