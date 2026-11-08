import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エリカのピクシー",
	},
	illustrator: "Atsuko Nishida",

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [36],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "妖精の力",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、ポケモンをプレイし、すべてのカードを手に取り付けている任意の数のポケモンを返すことができます。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "月の衝撃",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 576780
			},
		},
	],
};

export default card
