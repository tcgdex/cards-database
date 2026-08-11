import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ランターン",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "強い 光を 放ち 獲物の 目を くらませる。 隙が できたら 電撃を お見舞いする。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エネアース" },
			effect: {
				ja: "自分のポケモンが、相手のワザのダメージを受けてきぜつするたび、1回使える。きぜつしたポケモンについていた基本エネルギーを1枚、このポケモンにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エレキほう" },
			damage: "70+",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンについている[雷]エネルギーをすべてトラッシュする。その場合、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559174,
			},
		},
	],

	evolveFrom: {
		ja: "チョンチー",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [171],
};

export default card;
