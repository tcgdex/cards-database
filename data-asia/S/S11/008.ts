import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "タマゲタケ",
		'zh-tw': "哎呀球菇",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "モンスターボールに よく 似た 模様の 意味や 理由は いまだに だれも わからない。",
		'zh-tw': "酷似精靈球的花紋究竟有什麼意義和理由， 至今仍沒有人能了解。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667611,
				tcgplayer: 569939,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [590],
};

export default card;
