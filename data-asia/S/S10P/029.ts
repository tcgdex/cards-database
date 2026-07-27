import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ユクシー",
		'zh-tw': "由克希",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "ユクシーの 誕生により 人々の 生活を 豊かにする 知恵が 生まれたと 言われている。",
		'zh-tw': "據說因為由克希的誕生， 使人們的生活變得 豐富多彩的智慧才得以出現。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ちえのみちびき",
				'zh-tw': "智慧指引",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "サイコショット",
				'zh-tw': "精神射擊",
			},
			damage: 20,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651088,
				tcgplayer: 569872,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [480],
};

export default card;
