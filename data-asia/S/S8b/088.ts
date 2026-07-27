import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ナゲツケサル",
		'zh-tw': "投擲猴",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "２０匹ほどの グループで 暮らす。 決まった 役割を こなすことで 厳しい 自然を 生き抜いてきた。",
		'zh-tw': "２０幾隻形成團隊來生活。靠著每個成員明確的分工， 在嚴苛的大自然中生存下來。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "スローイングコーチ",
				'zh-tw': "拋投特訓",
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の「れんげき」のポケモンが使うワザの、相手のベンチの「ポケモンV・GX」へのダメージは「+30」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
				'zh-tw': "只要這隻寶可夢在場上，自己的「連擊」寶可夢使用的招式，對對手的備戰區的「寶可夢【V】・【GX】」造成的傷害「+30」點。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "なげつける",
				'zh-tw': "投擲",
			},
			cost: ["Fighting"],
			effect: {
				ja: "相手のポケモン1匹に、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻寶可夢受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586604,
				tcgplayer: 571341,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578397,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [766],
};

export default card;
