import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨクバリスV",
		'zh-tw': "噴火龍",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かみくだく",
				'zh-tw': "王者火焰",
			},
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "增加自己的棄牌區的「丹帝」的張數×50點傷害。",
			},
		},
		{
			name: { ja: "でんぐりプレス" },
			damage: 180,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525110,
				tcgplayer: 597287,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [820],
};

export default card;
