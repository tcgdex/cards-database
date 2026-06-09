import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤナッキー",
	},

	illustrator: "Yuka Tanaka",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "気性が 激しく トゲの ついた 尻尾を 振り回して 戦う。 頭の 葉っぱは とても 苦い。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひっぱたく" },
			damage: 70,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "ヤナップ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [512],

	thirdParty: {
		cardmarket: 829331,
		tcgplayer: 636444,
	},
};

export default card;
