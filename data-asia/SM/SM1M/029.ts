import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "ダンゴロ",
	},

	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "六角形の 空洞は 耳。 音が 鳴るほうへ 歩いていくが 音が 止むと 困って 転ぶ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "うちおとす" },
			damage: "20+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンの抵抗力が[闘]なら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561630,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [524],
};

export default card;
