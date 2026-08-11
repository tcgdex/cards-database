import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "オーロット",
	},

	illustrator: "Hiroyuki Yamamoto",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "森を 荒らす者を 喰ってしまうと いわれる ポケモン。 森に 暮らす 生き物たちには とても 優しい。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ポルターガイスト" },
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の手札を見て、その中にあるトレーナーズの枚数x30ダメージ。",
			},
		},
		{
			name: { ja: "ウッドホーン" },
			damage: 90,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561406,
			},
		},
	],

	evolveFrom: {
		ja: "ボクレー",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [709],
};

export default card;
