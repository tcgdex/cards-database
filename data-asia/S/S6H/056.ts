import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "リングマ",
		'zh-tw': "圈圈熊",
	},

	illustrator: "Hasegawa Saki",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "大きな 体の 持ち主だが 木登りが 上手で 木の 上で エサを 食べたり 寝たりする。",
		'zh-tw': "雖然體型很大，但很擅長爬樹，會在樹上進食和睡覺。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "きりさく",
				'zh-tw': "劈開",
			},
			damage: 40,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "はりたおす",
				'zh-tw': "擊倒",
			},
			damage: 110,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560472,
				tcgplayer: 569188,
			},
		},
	],

	evolveFrom: {
		ja: "ヒメグマ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [217],
};

export default card;
