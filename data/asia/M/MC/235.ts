import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナンジャモのマルマイン",
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'ja-jp': "電気エネルギーを 溜めこむほど 高速で 動けるようになるが そのぶん 爆発 しやすい。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どきどきボム" },
			cost: ["Lightning", "Lightning"],
			effect: {
				'ja-jp': "このポケモンに100ダメージ。コインを1回投げオモテなら、相手のバトルポケモンをきぜつさせる。",
			},
		},
		{
			name: { ja: "ライトニングボール" },
			damage: 100,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863531,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ナンジャモのビリリダマ",
	},

	retreat: 0,
	regulationMark: "I",
	rarity: "None",
	dexId: [101],
};

export default card;
