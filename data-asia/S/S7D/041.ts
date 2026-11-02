import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ディアルガ",
		'zh-tw': "帝牙盧卡",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		ja: "時間を 操る 力を 持つ。 シンオウ地方では 神様と 呼ばれ 神話に 登場する。",
		'zh-tw': "擁有操縱時間的力量。在神奧地區被稱為神，並在神話中登場。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "クロノワインド",
				'zh-tw': "時間扭轉",
			},
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けた「ポケモンV」は、ワザが使えない。",
				'zh-tw': "在下個對手的回合，受到這個招式的「寶可夢【V】」無法使用招式。",
			},
		},
		{
			name: {
				ja: "ヘビーインパクト",
				'zh-tw': "重磅衝擊",
			},
			damage: 210,
			cost: ["Psychic", "Metal", "Metal", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 571625,
				tcgplayer: 569364,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [483],
};

export default card;
