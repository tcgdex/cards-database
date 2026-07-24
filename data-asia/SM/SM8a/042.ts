import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトツキ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "剣の 柄を 握った 人の 腕に 青い 布を 巻きつけて 倒れるまで 命を 吸い取る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きりおとす" },
			cost: ["Metal"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558616,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [679],
};

export default card;
