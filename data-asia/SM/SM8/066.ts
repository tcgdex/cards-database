import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ラッキー",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "数が 少ないうえに 逃げ足の 速い ポケモンなので 見つけた 人は 運が いいぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いやしのまい" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のポケモン全員のHPを、それぞれ「20」回復する。",
			},
		},
		{
			name: { ja: "いたわりビンタ" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558705,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [113],
};

export default card;
