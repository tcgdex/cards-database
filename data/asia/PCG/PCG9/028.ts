import { Card } from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		ja: "Rayquaza Ex（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [384.1],
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "怒りのオーラ",
			},
			effect: {
				ja: "対戦相手よりも多くの賞品が残っている場合は、Rayquaza Exの特別なサーキットとSky-High Claws攻撃を使用するために必要なすべての無色のエネルギーを無視してください。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "特別なサーキット",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。ポケパワーやポケボディがあるポケモンを選択した場合、この攻撃は代わりに50のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			name: {
				ja: "空の爪",
			},
			damage: 70,
		},
	],

	retreat: 2,

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
