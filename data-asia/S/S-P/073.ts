import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "イトマル",
		'zh-tw': "蜜葉",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "キバの 毒は さほど 強くないが 巣に かかって 動けない 獲物を 弱らせるには 充分。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶらさがる" },
			damage: 10,
			cost: ["Darkness"],
		},
		{
			name: { ja: "チクチクさす" },
			damage: 20,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525095,
				tcgplayer: 597284,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [167],
};

export default card;
