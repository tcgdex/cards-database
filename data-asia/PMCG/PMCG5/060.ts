import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		// Erika's Clefairy
		ja: "エリカのピッピ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [35],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "月の力",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、ベンチ付きポケモンの1つから進化するカードをデッキに検索し、そのカードをそのポケモンに置きます。 （これはポケモンの進化としてカウントされます。）その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ムーンキック",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576781
			},
		},
	],
};

export default card
