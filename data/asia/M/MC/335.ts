import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼルネアス",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "永遠の 命を 分け与えると 言われている。樹木の 姿で １０００年 眠り 復活する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "オーロラゲイン" },
			damage: 30,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
		{
			name: { ja: "ギガインパクト" },
			damage: 130,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863637,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [716],
};

export default card;
