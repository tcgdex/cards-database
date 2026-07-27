import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マグマッグ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "溶岩で できた 体を 持つ。 絶えず 動いていないと 体が 冷えて 固まってしまうのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "マグマでかこむ" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "ほのお" },
			damage: 20,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550536,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [218],
};

export default card;
