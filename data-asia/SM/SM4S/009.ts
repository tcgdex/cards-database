import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトデマン",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "海辺に 多く 生息。 夜に なると 身体の 中心が 怪しく 赤く 輝きだす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かいてんアタック" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560321,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [120],
};

export default card;
