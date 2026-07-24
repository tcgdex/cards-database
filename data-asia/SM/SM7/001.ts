import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "キモリ",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "足の 裏の 小さな トゲが 壁や 天井に 引っかかるので 逆さまに なっても 落ちないのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねむけどく" },
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをどくとねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558962,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [252],
};

export default card;
