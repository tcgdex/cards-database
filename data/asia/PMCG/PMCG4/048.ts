import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "わるいペルシアン",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	dexId: [53],
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "誘惑",
			},
			effect: {
				'ja-jp': "相手がベンチ付きポケモンを持っている場合は、コインをひっくり返します。頭の場合は、対戦相手のベンチポケモンの1つを選択し、防御ポケモンで切り替えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "毒爪",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575714
			},
		},
	],
};

export default card
