import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ロンベル",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [271],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "アクアリフト",
			},
			effect: {
				ja: "Lombreに水エネルギーが付着している場合、Lombreのリトリートコストは0です。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "待ち伏せ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。",
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
