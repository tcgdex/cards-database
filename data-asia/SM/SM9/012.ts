import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "リザード",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "尻尾を 振り回して 相手を なぎ倒し 鋭い ツメで ズタズタに ひきさいてしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほのおのキバ" },
			damage: 30,
			cost: ["Fire", "Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558290,
			},
		},
	],

	evolveFrom: {
		ja: "ヒトカゲ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [5],
};

export default card;
