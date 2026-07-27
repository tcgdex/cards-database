import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ナエトル",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "全身で 光合成を して 酸素を 作る。 のどが 渇くと 頭の 葉っぱが しおれてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こうごうせい" },
			cost: ["Grass"],
			effect: {
				ja: "自分の山札にある[草]エネルギーを1枚、自分のポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "とびだしヘッド" },
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559959,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [387],
};

export default card;
