import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "グソクムシャ",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		ja: "勝つためには 手段を 問わない。 相手の 隙を ついて 前脚の 小さな ツメで とどめを 刺す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "きゅうしょぎり" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "このワザのダメージで、相手のポケモンがきぜつしたなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
		{
			name: { ja: "そこぢから" },
			damage: 150,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876925,
			},
		},
	],

	evolveFrom: {
		ja: "コソクムシ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [768],
};

export default card;
