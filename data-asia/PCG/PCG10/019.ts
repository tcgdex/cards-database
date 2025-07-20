import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "グラリー",
	},


	category: "Pokemon",
	dexId: [362],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "相乗効果",
			},
			effect: {
				ja: "76が機能している場合、相手のPokã©Monからの攻撃によってGlalieに与えられた損害は30減少します（脱力感と抵抗を適用した後）。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "パウダースノー",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "ダブルエッジ",
			},
			effect: {
				ja: "Glalieはそれ自体に10ダメージを与えます。",
			},
			damage: 60,
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
