import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ドククラゲ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "赤い 玉から 超音波を 発生させ 獲物を 弱らせると ８０本の 触手を 巻きつける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "うつろなしょくしゅ" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくとこんらんにする。",
			},
		},
		{
			name: { ja: "パラノーマル" },
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンは「ウルトラビースト」からワザのダメージを受けない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558351,
			},
		},
	],

	evolveFrom: {
		ja: "メノクラゲ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [73],
};

export default card;
