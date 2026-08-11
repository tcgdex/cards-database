import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のドンカラス",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "夜行性。 一声 鳴けば １００匹を 超える 子分の ヤミカラスが 集結する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ロケットフェザー" },
			damage: "60×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の手札から、名前に「ロケット団」とつくサポートを好きなだけトラッシュし、その枚数×60ダメージ。",
			},
		},
		{
			name: { ja: "ぶちかます" },
			damage: 100,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861346,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861694,
			},
		},
		{
			type: "reverse",
			foil: "team-rocket",
			thirdParty: {
				cardmarket: 861695,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のヤミカラス",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [430],
};

export default card;
