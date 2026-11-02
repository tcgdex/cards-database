import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "クヌギダマ",
		'zh-tw': "名偵探皮卡丘",
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "木の 皮を 重ね合わせて 殻を 分厚くするのが 大好き。 重くなっても 気にしない。",
		'zh-tw': "調查工作需要毅力。憑著不屈不撓的調查，找出案件的線索！",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ころがる",
				'zh-tw': "徹底調查",
			},
			damage: 30,
			cost: ["Grass", "Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705376,
				tcgplayer: 587807,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [204],
};

export default card;
