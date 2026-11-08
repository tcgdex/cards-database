import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "わるいゴルダック",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [55],
	hp: 60,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "第三の目",
			},
			effect: {
				'ja-jp': "最大3枚のカードを作成するために、Dark Golduckに取り付けられた1つのエネルギーカードを捨てます。",
			},
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				'ja-jp': "Super Psy",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575764
			},
		},
	],
};

export default card
