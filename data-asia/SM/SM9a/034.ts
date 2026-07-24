import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲピー",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 50,
	types: ["Fairy"],

	description: {
		ja: "殻の中に 幸せが たくさん つまっているらしく 優しくされると 幸運を 分け与える という。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひるませる" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558221,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [175],
};

export default card;
