import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミロル",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "まるめた 耳を 伸ばす 勢いで 攻撃する 技は トレーニングを するほど 威力が 増していく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あまえる" },
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。",
			},
		},
		{
			name: { ja: "スキップ" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863895,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [427],
};

export default card;
