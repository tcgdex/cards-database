import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "モココ",
		'zh-tw': "茸茸羊",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "ふかふかの 毛に 電気を ためこむ。 蓄えすぎて ところどころ つるつるに 禿げあがって しまった。",
		'zh-tw': "會將電力儲存在鬆軟的毛中。因為儲存了太多電力，身上有些地方變得光禿禿的。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "エレキボール",
				'zh-tw': "電球",
			},
			damage: 50,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560768,
				tcgplayer: 569247,
			},
		},
	],

	evolveFrom: {
		ja: "メリープ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [180],
};

export default card;
