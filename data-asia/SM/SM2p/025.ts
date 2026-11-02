import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "ダストダス",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "右腕から 飛びだす 毒液に 注意。 ちょっと かかるだけで 未知の 毒素に 冒される。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ゴミなだれ" },
			damage: "20×",
			cost: ["Psychic"],
			effect: {
				ja: "相手のトラッシュにあるグッズの枚数x20ダメージ。",
			},
		},
		{
			name: { ja: "アシッドボム" },
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561242,
			},
		},
	],

	evolveFrom: {
		ja: "ヤブクロン",
	},

	retreat: 3,
	rarity: "None",
	dexId: [569],
};

export default card;
