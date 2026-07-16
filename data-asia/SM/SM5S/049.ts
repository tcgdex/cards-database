import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャルマー",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "ご機嫌な ニャルマーは 尻尾で 新体操の リボンのような 美しい 動きを 見せる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あまがみ" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-40」される。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560003,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [431],
};

export default card;
