import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "クヌギダマ",
		'zh-tw': "榛果球",
		'zh-cn': "榛果球",
	},

	illustrator: "YASHIRO Nanaco",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "木の 皮を 重ね合わせて 殻を 分厚くするのが 大好き。 重くなっても 気にしない。",
		'zh-tw': "最喜歡把樹皮 疊在身上加厚外殼。 就算因此變重也毫不在意。",
		'zh-cn': "最喜歡把樹皮 疊在身上加厚外殼。 就算因此變重也毫不在意。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶらさがる",
				'zh-tw': "垂吊",
				'zh-cn': "垂吊",
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
				cardmarket: 821832,
				tcgplayer: 628642,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [204],
};

export default card;
