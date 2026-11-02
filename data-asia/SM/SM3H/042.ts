import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ペルシアン",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "気性が 荒く 目が 合うだけで 飛び掛ってくる。 鋭いツメに やられると 深い 傷を 負う。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いやなおと" },
			cost: ["Colorless"],
			effect: {
				ja: "次の自分の番、このワザを受けたポケモンが受けるワザのダメージは「+60」される。",
			},
		},
		{
			name: { ja: "きりさく" },
			damage: 40,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561106,
			},
		},
	],

	evolveFrom: {
		ja: "ニャース",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [53],
};

export default card;
