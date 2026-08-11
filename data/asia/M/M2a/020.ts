import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "エンテイ",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "新しい 火山が できるたび 生まれてくると 伝えられる 大地を 駆け巡る ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フレアフォール" },
			damage: "30+",
			cost: ["Fire", "Fire"],
			effect: {
				ja: "自分の場に[R]エネルギーが4個以上あるなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861263,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861560,
			},
		},
		{
			type: "reverse",
			foil: "quickball",
			thirdParty: {
				cardmarket: 861561,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [244],
};

export default card;
