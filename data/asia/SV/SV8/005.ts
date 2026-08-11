import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "コフーライ",
		'zh-tw': "粉蝶蛹",
		'zh-cn': "粉蝶蛹",
	},

	illustrator: "tono",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "決まった 棲み処を 持たない。 気の向くまま 野山を 歩きまわり 進化の エネルギーを 蓄える。",
		'zh-tw': "沒有固定的住處。 會隨心所欲地在山野走來走去， 蓄積進化時所需的能量。",
		'zh-cn': "沒有固定的住處。 會隨心所欲地在山野走來走去， 蓄積進化時所需的能量。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "あるきまわる",
				'zh-tw': "走來走去",
				'zh-cn': "走來走去",
			},
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
				'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
				'zh-cn': "將這隻寶可夢與備戰寶可夢互換。",
			},
		},
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
				'zh-cn': "撞擊",
			},
			damage: 30,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793439,
				tcgplayer: 587585,
			},
		},
	],

	evolveFrom: {
		ja: "コフキムシ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [665],
};

export default card;
