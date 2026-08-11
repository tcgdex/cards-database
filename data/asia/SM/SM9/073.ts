import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カモネギ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'ja-jp': "持っている 茎は 大切な 武器でもあり 刀を 振るように いろんな ものを 切ることができる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もってくる" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "どうぐはじき" },
			damage: "20+",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。トラッシュした場合、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558429,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [83],
};

export default card;
