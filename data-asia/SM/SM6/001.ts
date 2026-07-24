import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "タマタマ",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "６匹で １人前の ポケモン。 マケンカニに よく 狙われるが 念力を 使って 撃退する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふえる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある「タマタマ」を1枚、ベンチに出す。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559546,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [102],
};

export default card;
