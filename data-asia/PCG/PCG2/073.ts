import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "クローダント",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [342],
	hp: 70,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "暗い保護",
			},
			effect: {
				ja: "相手の攻撃によってクローダントに与えられた損害は、クローダントに付着した各暗闇に対して（衰弱と抵抗を適用した後）10削減されます。この方法で20以上のダメージを減らすことはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "バブルビーム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 20,
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				ja: "クロスカット",
			},
			effect: {
				ja: "防御するポケモンが進化したポケモンである場合、この攻撃は40ダメージに加えて20ダメージを与えます。",
			},
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
