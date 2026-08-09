import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼブライカ",
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "雷鳴を 聞くと 群れの シママが 雷から 充電できるように 群れで 雷雲を 追いかける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぜんそくりょく" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札をすべてトラッシュし、山札を6枚引く。",
			},
		},
		{
			name: { ja: "ヘッドボルト" },
			damage: 70,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807433,
			},
		},
	],

	evolveFrom: {
		ja: "シママ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [523],
};

export default card;
