import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "マグマッグ",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "溶岩で できた 体を 持つ。 絶えず 動いていないと 体が 冷えて 固まってしまうのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふむ" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "かえんほうしゃ" },
			damage: 60,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558899,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [218],
};

export default card;
