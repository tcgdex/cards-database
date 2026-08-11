import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "トウホクのピカチュウ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'ja-jp': "両頬には 電気を 溜めこむ 袋がある。 怒ると 溜めこんだ 電気を 一気に 放ってくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "リニューアルオープン！" },
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "おどりまわる" },
			damage: "30×",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "ウラが出るまでコインを投げ、オモテの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 830066,
				tcgplayer: 650726,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [25],
};

export default card;
