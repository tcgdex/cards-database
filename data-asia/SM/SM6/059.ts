import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "フラエッテ",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 70,
	types: ["Fairy"],

	description: {
		ja: "手入れの 行き届いた 花壇の 花が 咲くと 姿を 現して かれんな ダンスで 祝福する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はなびらくるくる" },
			cost: ["Fairy"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559604,
			},
		},
	],

	evolveFrom: {
		ja: "フラベベ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [670],
};

export default card;
