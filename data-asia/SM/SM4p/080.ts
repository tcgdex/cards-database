import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "ラッキー",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "ラッキーの 産む タマゴは 栄養が たっぷり つまっている。 多くの ポケモンが 大好物だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きずをなおす" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、自分のポケモン1匹のHPを「30」回復する。",
			},
		},
		{
			name: { ja: "ぶちかます" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560113,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [113],
};

export default card;
