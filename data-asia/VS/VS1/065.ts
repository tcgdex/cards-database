import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ジャニーンのアリアドス",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [168],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ストリングショット",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				ja: "毒の牙",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。",
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
