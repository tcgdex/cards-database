import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼラオラV",
		'zh-tw': "捷拉奧拉V",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "クロスフィスト",
				'zh-tw': "十字拳",
			},
			damage: 100,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "前の自分の番、このポケモン以外の「れんげき」のポケモンがワザを使っていたなら、相手のベンチポケモン1匹にも、160ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "在上個自己的回合，若這隻寶可夢以外的「連擊」寶可夢使用了招式，則對手的1隻備戰寶可夢也受到160點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586570,
				tcgplayer: 571307,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [807],
};

export default card;
