import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "オマニテ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [138],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "影響",
			},
			effect: {
				ja: "オマニテ、カブト、アエロダクチル、リリープ、またはアノリスをデッキで検索し、そのうちの2つをベンチに入れます。その後、デッキをシャッフルします。新しいベンチポケモンを基本的なポケモンとして扱います。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "泥ショット",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
