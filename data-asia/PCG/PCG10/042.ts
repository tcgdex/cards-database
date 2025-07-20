import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "wynaut",
	},


	category: "Pokemon",
	dexId: [360],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "赤ちゃんの進化",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）、Wobbuffetを手からWynaut（これは進化するWynautとしてカウント）に置き、Wynautからすべてのダメージカウンターを削除することができます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "フレイル",
			},
			effect: {
				ja: "ダメージ数のダメージ数は、Wynautのダメージ数をカウンターします。",
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
