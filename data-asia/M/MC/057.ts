import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アゴジムシ",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "ネバネバの 糸を 吐いて 枝に 巻きつけ 振り子の 動きで 木から 木へと 身軽に 飛び移る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おそいかかる" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863348,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [736],
};

export default card;
