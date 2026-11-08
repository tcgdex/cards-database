import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カツラのウインディ",
	},
	illustrator: "Ken Sugimori",

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [59],
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ヒートタックル",
			},
			effect: {
				'ja-jp': "ブレインのアルカニンは、それ自体に10ダメージを与えます。",
			},
			damage: 40,
		},
		{
			cost: ["Fire", "Fire", "Fire", "Fire"],
			name: {
				'ja-jp': "ファイアストーム",
			},
			effect: {
				'ja-jp': "この攻撃を使用するために、ブレインのアルカニンに取り付けられた3つのファイアエネルギーカードを捨てます。",
			},
			damage: 120,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575329
			},
		},
	],
};

export default card
