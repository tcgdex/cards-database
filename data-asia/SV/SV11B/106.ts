import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヤッキー",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "頭の ふさに 水を ためる。 貯水量が 減ると 尻尾で 水を 吸い上げて 補給する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひっぱたく" },
			damage: 70,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "ヒヤップ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [516],

	thirdParty: {
		cardmarket: 829349,
		tcgplayer: 636460,
	},
};

export default card;
