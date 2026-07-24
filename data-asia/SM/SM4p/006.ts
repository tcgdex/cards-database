import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "カリキリ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "爽やかで 甘い香りが する。 カリキリが 隠れている 草むらには よく アブリーが 群れている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こうごうせい" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある[草]エネルギーを1枚、自分のポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "このは" },
			damage: 20,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560039,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [753],
};

export default card;
