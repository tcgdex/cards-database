import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "セレビ",
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
				ja: "クリスタルタイプ",
			},
			effect: {
				ja: "手からセレビに草、水、またはサイキックの基本エネルギーカードを取り付けると、セレビのタイプ（色）はターンの終わりまでそのタイプのエネルギーと同じになります。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Water"],
			name: {
				ja: "共感的な癒し",
			},
			effect: {
				ja: "セレビと、セレビと同じタイプ（色）の各ポケモンから2つのダメージカウンターを削除します。",
			},
		},
		{
			cost: ["Grass", "Psychic", "Colorless"],
			name: {
				ja: "マインドベンド",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
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
