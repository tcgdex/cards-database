import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ルリリ",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],

	description: {
		ja: "大きな 尻尾に 乗って 弾むと 地上では 速く 移動できる。 水辺で 暮らす ポケモン。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぐんぐんチャージ" },
			effect: {
				ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。コインを1回投げオモテなら、自分のトラッシュにある基本エネルギーを1枚、バトルポケモンにつける。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554916,
			},
		},
	],

	retreat: 0,
	regulationMark: "C",
	rarity: "Common",
	dexId: [298],
};

export default card;
