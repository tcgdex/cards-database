import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル バリヤード",
		'zh-tw': "冰伊布V",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "足の 裏から 冷気を 出す。 凍らせた 床の 上で １日 タップダンスに 励んでいる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はたく",
				'zh-tw': "冰霜充能",
			},
			damage: 10,
			cost: ["Water"],
		},
		{
			name: {
				ja: "さぐりあてる",
				'zh-tw': "凍凝之風",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の山札からグッズを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561775,
				tcgplayer: 597358,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [122],
};

export default card;
