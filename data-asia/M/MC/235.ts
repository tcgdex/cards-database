import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ナンジャモのマルマイン",
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "電気エネルギーを 溜めこむほど 高速で 動けるようになるが そのぶん 爆発 しやすい。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どきどきボム" },
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "このポケモンに100ダメージ。コインを1回投げオモテなら、相手のバトルポケモンをきぜつさせる。",
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
		ja: "ナンジャモのビリリダマ",
	},

	retreat: 0,
	regulationMark: "I",
	rarity: "None",
	dexId: [101],
};

export default card;
