import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "コータス",
		'zh-tw': "煤炭龜",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "甲羅の 中で 石炭を 燃やし エネルギーに している。 ピンチの ときは 黒い ススを 噴き出す。",
		'zh-tw': "會在甲殼中燃燒煤炭產生能量。遇到危機時 會噴出黑色的煤煙。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ふむ",
				'zh-tw': "踩",
			},
			damage: 30,
			cost: ["Fire", "Colorless"],
		},
		{
			name: {
				ja: "かえんほうしゃ",
				'zh-tw': "噴射火焰",
			},
			damage: 130,
			cost: ["Fire", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651072,
				tcgplayer: 569856,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [324],
};

export default card;
