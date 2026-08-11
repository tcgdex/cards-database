import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "マギアナV",
		'zh-tw': "瑪機雅娜V",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ギアスロー",
				'zh-tw': "齒輪一投",
			},
			cost: ["Metal"],
			effect: {
				ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻寶可夢受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
		{
			name: {
				ja: "スペシャルレーザー",
				'zh-tw': "特殊鐳射",
			},
			damage: "100+",
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "このポケモンに特殊エネルギーがついているなら、120ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上附有特殊能量，則增加120點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673049,
				tcgplayer: 570814,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [801],
};

export default card;
