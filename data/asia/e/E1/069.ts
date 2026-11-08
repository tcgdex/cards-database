import { Card } from "models/database/card"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "おしっこ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [110],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "ファウルガス",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。尾の場合、防御ポケモンは混乱しています。",
			},
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				'ja-jp': "失火",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、ウィージングに6つのダメージカウンターを入れます。",
			},
			damage: 60,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
