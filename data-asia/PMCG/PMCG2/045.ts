import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ウィグリティフ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [40],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "子守lulaby",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},

		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "波をします",
			},
			effect: {
				ja: "ベンチ付きポケモンごとに10ダメージに加えて10ダメージを与えます。",
			},

		},
	],

	retreat: 2,

	variants : [
		{
			type: "holo",
		},
	],
};

export default card
