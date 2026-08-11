import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・ブルル",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "大木を 引き抜き ブンブン 振り回す。 草木を 茂らせて そのエネルギーを 吸収する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ウッドホーン" },
			damage: 30,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
		{
			name: { ja: "カームストライク" },
			damage: "60+",
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "自分がすでにGXワザを使っていたなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560044,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [787],
};

export default card;
