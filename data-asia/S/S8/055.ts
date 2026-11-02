import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "イワーク",
		'zh-tw': "大岩蛇",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "大きく 丈夫な 体を くねらせ よじらせ 時速８０キロで 地面を 勢いよく 掘り進む。",
		'zh-tw': "彎曲扭動巨大結實的身體，以時速８０公里的猛烈勢頭挖掘前進。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ガードプレス",
				'zh-tw': "防守壓制",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			},
		},
		{
			name: {
				ja: "いわおとし",
				'zh-tw': "落石",
			},
			damage: 90,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575610,
				tcgplayer: 569556,
			},
		},
	],

	retreat: 4,
	regulationMark: "E",
	rarity: "Common",
	dexId: [95],
};

export default card;
