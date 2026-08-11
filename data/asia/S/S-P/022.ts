import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "エースバーン",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		ja: "小石を リフティングして 炎の サッカーボールを つくる。 するどい シュートで 相手を 燃やす。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ほのおをまとう" },
			damage: 40,
			cost: ["Fire"],
			effect: {
				ja: "自分のトラッシュから[炎]エネルギーを1枚選び、このポケモンにつける。",
			},
		},
		{
			name: { ja: "ぐれんのほのお" },
			damage: 160,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463009,
				tcgplayer: 597242,
			},
		},
	],

	evolveFrom: {
		ja: "ラビフット",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [815],
};

export default card;
