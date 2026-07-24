import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "チリーン",
	},

	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "頭の 吸盤で 木の 枝や 家の 軒下に ぶら下がる。 ７種類 音色を 使い分ける。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちんもくのすず" },
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "次の相手の番、相手は手札から特性を持つポケモンを場に出せない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560335,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [358],
};

export default card;
