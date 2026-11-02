import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・コケコVMAX",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "ダイショック" },
			damage: 180,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 538618,
				tcgplayer: 569032,
			},
		},
	],

	evolveFrom: {
		ja: "カプ・コケコV",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Hyper rare",
	dexId: [785],
};

export default card;
