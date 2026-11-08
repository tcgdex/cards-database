import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "セレビ",
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [251],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "クリスタルタイプ",
			},
			effect: {
				'ja-jp': "手からセレビに草、水、またはサイキックの基本エネルギーカードを取り付けると、セレビのタイプ（色）はターンの終わりまでそのタイプのエネルギーと同じになります。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Water"],
			name: {
				'ja-jp': "共感的な癒し",
			},
			effect: {
				'ja-jp': "セレビと、セレビと同じタイプ（色）の各ポケモンから2つのダメージカウンターを削除します。",
			},
		},
		{
			cost: ["Grass", "Psychic", "Colorless"],
			name: {
				'ja-jp': "マインドベンド",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
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
			stamp: ["1st Edition"],
		},
	],
};

export default card
