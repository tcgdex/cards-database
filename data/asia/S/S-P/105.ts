import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "まるのみされたピカチュウ",
		'zh-tw': "不良蛙",
	},

	illustrator: "2020 Pikachu Project",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "オコヤの森で 出会った ピカチュウと ウッウ。 すっかり ウッウに 気に入られてしまい 困っている。",
		'zh-tw': "毒素在稀釋後能製成藥品。牠是製藥公司的吉祥物，廣受眾人的歡迎。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "もがく",
				'zh-tw': "推擊",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "10まんボルト" },
			damage: 70,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525215,
				tcgplayer: 597306,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [25],
};

export default card;
