import { Card } from "models/database/card"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ズバット",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [41],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "超音速",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},

		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "リーチライフ",
			},
			effect: {
				'ja-jp': "防御ポケモンに与えられた損傷に等しいZubatから多くのダメージカウンターを削除します（脱力と抵抗を適用した後）。 Zubatのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575678
			},
		},
	],
};

export default card
