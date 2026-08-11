import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "オタマロ",
		'zh-tw': "圓蝌蚪",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "音波で 仲間と 連絡する。 警戒の 鳴き声は 人や ほかの ポケモンには 聞こえない。",
		'zh-tw': "透過音波來聯繫夥伴。人類和其他寶可夢都聽不見牠發出的警告聲。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "どろかけ",
				'zh-tw': "擲泥",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560764,
				tcgplayer: 569243,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [535],
};

export default card;
