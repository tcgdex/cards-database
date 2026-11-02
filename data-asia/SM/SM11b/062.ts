import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ラフレシアGX",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かおるはなぞの" },
			effect: {
				ja: "自分の番に1回使える。自分のポケモン全員のHPを、それぞれ「30」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "だいかいか 180-" },
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
		{
			name: { ja: "アレルギーボムGX" },
			damage: 50,
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをどくとやけどとマヒにする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555294,
			},
		},
	],

	evolveFrom: {
		ja: "クサイハナ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [45],

	suffix: "GX",
};

export default card;
