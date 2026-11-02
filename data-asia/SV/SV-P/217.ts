import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "パモ",
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "手の 肉球が 放電器官。 後ろ脚で ようやく 立ち上がると 手のひらから 電撃を 放つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なぐる" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "エレキック" },
			damage: 20,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587924,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [921],
};

export default card;
