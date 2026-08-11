import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ランスのアエロダクチル",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [142],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "翼攻撃",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "ノーシブ",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、ランスのアエロダクチルはそれ自体に20の損傷を与えます。 （弱さや抵抗を適用しないでください。）",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
