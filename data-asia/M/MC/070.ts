import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オリーニョ",
	},

	illustrator: "Felicia Chen",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "フレッシュな 香りの 美味しい オイルを 分けてくれる。 古くから 人間と 共存してきた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "えいようそ" },
			cost: ["Grass"],
			effect: {
				ja: "自分のポケモン1匹のHPを「40」回復する。",
			},
		},
		{
			name: { ja: "たいあたり" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863361,
			},
		},
	],

	evolveFrom: {
		ja: "ミニーブ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [929],
};

export default card;
