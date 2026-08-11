import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒバニー",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "戦う 準備が 整うと 鼻の 頭と 足の 裏の 肉球が 高熱を 発する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "メラメラダッシュ" },
			cost: ["Fire"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数ぶん、自分の山札を引く。",
			},
		},
		{
			name: { ja: "ほのお" },
			damage: 30,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 585975,
				tcgplayer: 597428,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [813],
};

export default card;
