import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメラ",
		'zh-tw': "黏黏寶",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "湿度 高き 木陰に 身を 潜める。 体表を覆う ぬめりとした 液体が 乾くと たちどころに 生気を 失う。",
		'zh-tw': "藏身在濕度較高的樹蔭下。覆蓋著身體的黏糊液體一旦 乾枯，就會立刻失去生命力。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "とかす",
				'zh-tw': "溶解",
			},
			damage: 30,
			cost: ["Water", "Metal"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656376,
				tcgplayer: 570716,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577127,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [704],
};

export default card;
