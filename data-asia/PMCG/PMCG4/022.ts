import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークゴルダック",
	},

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
				ja: "第三の目",
			},
			effect: {
				ja: "最大3枚のカードを作成するために、Dark Golduckに取り付けられた1つのエネルギーカードを捨てます。",
			},
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				ja: "Super Psy",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
