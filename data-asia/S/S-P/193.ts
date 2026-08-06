import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ホルビー",
		'zh-tw': "挖洞兄弟",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],

	description: {
		ja: "耳で 穴を 掘るのが 得意。 地下１０メートルに とどく 巣穴を 一晩で つくってしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "マッドパーティ" },
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある、ワザ「マッドパーティ」を持つポケモンの数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561788,
				tcgplayer: 597391,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [659],
};

export default card;
