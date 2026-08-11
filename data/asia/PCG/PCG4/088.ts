import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミルタンク",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [241],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "厚い脂肪",
			},
			effect: {
				'ja-jp': "FirePokã©MonとWaterPokã©Monからの攻撃によるMiltankに与えられた損害は、30減少します（脱力感と抵抗を適用した後）。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ヒーリングミルク",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。各ヘッドについて、ポケモンの1つから2つのダメージカウンターを削除します。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "ボディスラム",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
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
