import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エリカのナゾノクサ",
	},
	illustrator: "Ken Sugimori",

	rarity: "Common",
	category: "Pokemon",
	dexId: [43],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "ブロット",
			},
			effect: {
				'ja-jp': "エリカの奇妙なダメージカウンターがある場合は、それらの1つを削除します。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "散発的なスポンジ",
			},
			effect: {
				'ja-jp': "ErikaのOddishにダメージカウンターがそれにある場合は、コインをひっくり返します。  ヘッドの場合、それらのダメージカウンターの1つを削除します。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576791
			},
		},
	],
};

export default card
