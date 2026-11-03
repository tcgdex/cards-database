import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "グレンアルマ",
	},

	illustrator: "Iwamoto05",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "エスパーと 炎の エネルギーで 強化された 鎧を まとう。 灼熱の 火の玉を 放つ。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "フレイムレギオン" },
			damage: "40+",
			cost: ["Fire"],
			effect: {
				ja: "{R}エネルギーがついている自分のベンチポケモンの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "×2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888628,
				cardtrader: 391489,
				tcgplayer: 695063,
			},
		},
	],

	evolveFrom: {
		ja: "カルボウ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [936],
};

export default card;
