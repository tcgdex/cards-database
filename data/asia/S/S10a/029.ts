import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ゾロア",
		'zh-tw': "洗翠 索羅亞",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "死した魂 ヒスイの地にて 蘇る。 怨嗟は 力となり 頭より 立ち昇り 相手の姿に 変じ 恨み 晴らしたり。",
		'zh-tw': "死後靈魂在洗翠地區復甦。怨恨化為力量，從其頭部冉冉飄升。 會化成對手的樣貌去洗刷仇恨。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "もってくる",
				'zh-tw': "呼喚",
			},
			cost: [],
			effect: {
				ja: "自分の山札を1枚引く。",
				'zh-tw': "從自己的牌庫抽出1張卡。",
			},
		},
		{
			name: {
				ja: "つぶやく",
				'zh-tw': "囈語",
			},
			damage: 10,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656333,
				tcgplayer: 570692,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577111,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [570],
};

export default card;
