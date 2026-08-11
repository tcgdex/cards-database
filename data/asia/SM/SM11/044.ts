import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハガネール",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	description: {
		'ja-jp': "地中の 高い 圧力と 熱で 鍛えられた 体は あらゆる 金属よりも 硬い。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ランドストリーム" },
			damage: 20,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "自分のトラッシュにある[闘]エネルギーを2枚、このポケモンにつける。",
			},
		},
		{
			name: { ja: "ギガトンシェイク" },
			damage: 220,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、自分のポケモン全員はワザが使えない。（新しく出したポケモンも含む。）",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557006,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イワーク",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [208],
};

export default card;
