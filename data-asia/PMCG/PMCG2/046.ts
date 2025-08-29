import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "カンガスハン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [115],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "フェッチ",
			},
			effect: {
				ja: "カードを描きます。",
			},

		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "彗星パンチ",
			},
			effect: {
				ja: "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},

		},
	],

	retreat: 3,

	variants : [
		{
			type: "holo",
		},
	],
};

export default card
