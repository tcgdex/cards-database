import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ラプラス",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "人を 乗せて 泳ぐのが 好き。 アローラ地方 では 大切な 水上の 交通 手段。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マーメイドコール" },
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュにある「カスミのおねがい」を1枚、相手に見せてから、手札に加える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "なみのり" },
			damage: 90,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556971,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [131],
};

export default card;
