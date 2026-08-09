import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ダーテング",
		'zh-tw': "狡猾天狗",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],

	description: {
		ja: "森の 奥で ひっそりと 暮らす。 大きな 団扇を あおぐと 木枯らしが 吹くと いわれている。",
		'zh-tw': "在森林深處靜靜地生活。據說當牠搧動大大的團扇，就會刮起冬日寒風。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "テングッバイ",
				'zh-tw': "天狗再見",
			},
			cost: ["Darkness"],
			effect: {
				ja: "ダメカンがのっている相手のバトルポケモンと、ついているすべてのカードを、相手の手札にもどす。",
				'zh-tw': "將身上放置有傷害指示物的對手的戰鬥寶可夢與附加的卡，全部放回對手的手牌。",
			},
		},
		{
			name: {
				ja: "こがらしせんぷう",
				'zh-tw': "寒冬旋風",
			},
			damage: 130,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
				'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560828,
				tcgplayer: 569276,
			},
		},
	],

	evolveFrom: {
		ja: "コノハナ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [275],
};

export default card;
