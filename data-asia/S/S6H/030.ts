import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ヤドン",
		'zh-tw': "伽勒爾 呆呆獸",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "ガラル地方にだけ 生息する 植物の タネを 食べているため しっぽは スパイシーな 味わいだ。",
		'zh-tw': "牠以只生長在伽勒爾地區的植物的種子為食，因此尾巴是辣味的。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぴりっ",
				'zh-tw': "緊抓",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "ずつき",
				'zh-tw': "火藥奇襲",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560446,
				tcgplayer: 569162,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [79],
};

export default card;
