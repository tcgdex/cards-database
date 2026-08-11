import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "マグマラシ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "戦闘中 背中を 向けたら 要注意。 背中の 炎で 攻撃してくる 前触れだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶちかます" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ほのおでこがす" },
			damage: 60,
			cost: ["Fire", "Fire", "Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558657,
			},
		},
	],

	evolveFrom: {
		ja: "ヒノアラシ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [156],
};

export default card;
