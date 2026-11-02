import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "リーフィアex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あおばのあらし" },
			damage: "60×",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のポケモン全員についているエネルギーの数×60ダメージ。",
			},
		},
		{
			name: { ja: "モスアゲート" },
			damage: 230,
			cost: ["Grass", "Fire", "Water"],
			effect: {
				ja: "自分のベンチポケモン全員のHPを、それぞれ「100」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863329,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [470],

	suffix: "EX",
};

export default card;
