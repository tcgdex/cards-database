import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケットのセレビ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [251],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "暗い供給",
			},
			effect: {
				'ja-jp': "手からポケモンに1匹の草または闇のエネルギーカードを1匹に取り付けます。",
			},
		},
		{
			cost: ["Grass", "Darkness"],
			name: {
				'ja-jp': "毒パウダー",
			},
			effect: {
				'ja-jp': "防御ポケモンは現在中毒になっています。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
