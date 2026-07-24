import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ピンプク",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "大人しい ポケモンだが お腹の 丸い 石を 取り上げると 泣いて 騒いで 大暴れ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ままごとヒール" },
			effect: {
				ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。コインを1回投げオモテなら、自分のポケモン1匹のHPを「60」回復する。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557435,
			},
		},
	],

	retreat: 0,
	regulationMark: "C",
	rarity: "Common",
	dexId: [440],
};

export default card;
