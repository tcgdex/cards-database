import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "Wurmple",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [265],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "上昇",
			},
			effect: {
				ja: "Wurmpleから進化するカードをデッキで検索し、Wurmpleに置いてください。 （これは進化する翼としてカウントされます。）その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Grass"],
			name: {
				ja: "奇跡の本質",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、1つの特別な条件を選択します。それぞれの防御ポケモンは現在、その特別な状態の影響を受けています。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
