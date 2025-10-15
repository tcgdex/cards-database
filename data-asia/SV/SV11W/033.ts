import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "コロモリ",
	},

	illustrator: "Wintr Wandr",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "暗い 森や 洞穴で 暮らす。 鼻の 穴から 超音波を 出して あたりの 様子を 探る。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "ハートスタンプ" }, damage: 10, cost: ["Colorless"] },
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [527],
};

export default card;
