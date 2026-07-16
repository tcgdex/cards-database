import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "エンニュートGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Fire"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ましょうのツメ" },
			damage: "50×",
			cost: ["Fire", "Fire"],
			effect: {
				ja: "自分がすでにとったサイドの枚数x50ダメージ。",
			},
		},
		{
			name: { ja: "ヒートブラスト" },
			damage: 110,
			cost: ["Fire", "Fire"],
		},
		{
			name: { ja: "クインヘイズGX" },
			cost: ["Fire", "Fire"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを、すべてトラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561213,
			},
		},
	],

	evolveFrom: {
		ja: "ヤトウモリ",
	},

	retreat: 2,
	rarity: "Double rare",
	dexId: [758],

	suffix: "GX",
};

export default card;
