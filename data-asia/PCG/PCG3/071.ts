import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ロケットのセレビ",
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
				ja: "暗い供給",
			},
			effect: {
				ja: "手からポケモンに1匹の草または闇のエネルギーカードを1匹に取り付けます。",
			},
		},
		{
			cost: ["Grass", "Darkness"],
			name: {
				ja: "毒パウダー",
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
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
