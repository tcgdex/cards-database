import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "金星",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [3],
	hp: 110,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "クロロフィル",
			},
			effect: {
				ja: "草に取り付けられた無色のエネルギーのみを提供するすべてのエネルギーカードは、代わりに草のエネルギーを提供します。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "グリーンブラスト",
			},
			effect: {
				ja: "すべてのポケモンに取り付けられた各草のエネルギーに対して20のダメージと10ダメージがさらに10ダメージを与えます。",
			},
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				ja: "有毒な睡眠",
			},
			effect: {
				ja: "防御するポケモンは今眠っていて毒されています。ターンの間に防御ポケモンに1つではなく2つのダメージカウンターを置きます。",
			},
		},
	],

	retreat: 3,

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
