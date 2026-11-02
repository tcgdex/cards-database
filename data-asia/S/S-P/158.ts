import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "チェリンボ",
		'zh-tw': "葉伊布V",
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "体が 赤い チェリンボほど 栄養が 多く 玉の 味も 甘くて おいしいよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "このは",
				'zh-tw': "葉子防守",
			},
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561773,
				tcgplayer: 597356,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [420],
};

export default card;
