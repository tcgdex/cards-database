import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴローン",
		'zh-tw': "隆隆石",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "崖を 転がり 移動する。 間違えて 川に 落ちると 最期の あがきで 大爆発。",
		'zh-tw': "藉著從山崖上滾落來移動。如果不小心掉進河裡，就會在最後掙扎時來個大爆炸。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
			},
			damage: 30,
			cost: ["Fighting"],
		},
		{
			name: {
				ja: "ロックスマッシュ",
				'zh-tw': "岩石粉碎",
			},
			damage: 70,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575608,
				tcgplayer: 569554,
			},
		},
	],

	evolveFrom: {
		ja: "イシツブテ",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Common",
	dexId: [75],
};

export default card;
