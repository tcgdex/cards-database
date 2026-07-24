import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "ランターン",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "強い 光を 放ち 獲物の 目を くらませる。 隙が できたら 電撃を お見舞いする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あやしいひかり" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "アクアスパーク" },
			damage: "60+",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンに[水]エネルギーがついているなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561619,
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
