import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "イワンコ",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "よく なつくので 初心者に お勧めのポケモンと いわれるが 育つと 気性は 荒くなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おいつめる" },
			cost: ["Fighting"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "けりつける" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560088,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [744],
};

export default card;
