import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ランターン",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "強い 光を 放ち 獲物の 目を くらませる。 隙が できたら 電撃を お見舞いする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "サルベージ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにあるグッズを4枚、相手に見せてから、山札にもどして切る。",
			},
		},
		{
			name: { ja: "シグナルビーム" },
			damage: 50,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558671,
			},
		},
	],

	evolveFrom: {
		ja: "チョンチー",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [171],
};

export default card;
