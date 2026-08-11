import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "lileep",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [345],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "柔らかい触手",
			},
			effect: {
				'ja-jp': "Lileepに反応エネルギーカードが付属している場合は、Lileepから2つのダメージカウンターを削除します。",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "レイを混乱させます",
			},
			effect: {
				'ja-jp': "防御ポケモンは今混乱しています。",
			},
			damage: 20,
		},
	],

	retreat: 2,

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
