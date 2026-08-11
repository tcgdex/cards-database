import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ガマガル",
		'zh-tw': "藍蟾蜍",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "きれいな 声で 鳴くこともある。 体の 突起が 大きいほど 広い 音域で 鳴けるのだ。",
		'zh-tw': "有時也會發出悅耳的叫聲。身上突起物越大的藍蟾蜍越能以更廣的音域來鳴叫。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ふむ",
				'zh-tw': "踩",
			},
			damage: 20,
			cost: ["Fighting"],
		},
		{
			name: {
				ja: "ベロではたく",
				'zh-tw': "舌擊",
			},
			damage: 50,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560810,
				tcgplayer: 569266,
			},
		},
	],

	evolveFrom: {
		ja: "オタマロ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Common",
	dexId: [536],
};

export default card;
