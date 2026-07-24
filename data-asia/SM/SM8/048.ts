import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "アーゴヨン",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "体内に 数百リットルの 毒液を ためている。 ＵＢと 呼ばれる 生物の 一種。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "チャージアップ" },
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュにある基本エネルギーを1枚、このポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ターニングポイント" },
			damage: "80+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分のサイドの残り枚数が3枚なら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558687,
			},
		},
	],

	evolveFrom: {
		ja: "ベベノム",
	},

	retreat: 1,
	rarity: "Rare",
	dexId: [804],
};

export default card;
