import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "カダブラ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [64],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "エネルギーリコール",
			},
			effect: {
				ja: "廃棄パイルからカダブラに2つの基本エネルギーカードを取り付けます（1つしかない場合は1）。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "レイを混乱させます",
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
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
