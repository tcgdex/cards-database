import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "マグマー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [126],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ダンプとドロー",
			},
			effect: {
				ja: "手から最大2枚のエネルギーカードを捨ててください。次に、廃棄したエネルギーカードごとに2枚のカードを描画します。",
			},
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				ja: "炎の尾",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
