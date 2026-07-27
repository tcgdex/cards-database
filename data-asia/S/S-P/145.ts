import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ミロカロス",
		'zh-tw': "卡比獸",
	},

	illustrator: "Fuzichoco",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "もっとも 美しい ポケモンとも 呼ばれ 多くの 芸術家に インスピレーションを 与えてきた。",
		'zh-tw': "每天不吃下４００公斤的食物絕不會善罷甘休。吃飽了就會開始睡覺。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ブライトヒール" },
			effect: {
				ja: "自分の番に1回使える。自分のポケモン全員のHPを、それぞれ「20」回復する。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "なみのり",
				'zh-tw': "滾動衝撞",
			},
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525405,
				tcgplayer: 597344,
			},
		},
	],

	evolveFrom: {
		ja: "ヒンバス",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [350],
};

export default card;
