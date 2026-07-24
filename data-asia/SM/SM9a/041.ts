import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "ベロリンガ",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "長い ベロで なんでも ベロリと 舐めて 確かめている。 舐められた 部分を 放っておくと かぶれるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "したでなめる" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558228,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [108],
};

export default card;
