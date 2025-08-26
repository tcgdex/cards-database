import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ウーパー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [194],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "飽和",
			},
			effect: {
				ja: "手からWooperに水エネルギーカードを取り付けたら、Wooperからすべての特別な条件と1ダメージカウンターを削除します。",
			},
		}],

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "波のスプラッシュ",
			},
			damage: 10,
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
