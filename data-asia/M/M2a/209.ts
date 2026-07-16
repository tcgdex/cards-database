import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル タチフサグマ",
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "凄まじい 声量を もつ。 シャウトとともに 威嚇するさまは ブロッキングと 呼ばれている。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "スカーシャウト" },
			damage: "70×",
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×70ダメージ。",
			},
		},
		{
			name: { ja: "パンクスマッシュ" },
			damage: 160,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861452,
			},
		},
	],

	evolveFrom: {
		ja: "ガラル マッスグマ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [862],
};

export default card;
