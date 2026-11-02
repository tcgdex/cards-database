import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "クスネ",
		'zh-tw': "偷兒狐",
	},

	illustrator: "Hasegawa Saki",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "用心深く ずる賢い。 エサを 盗むと しっぽで 足跡を 消しながら 逃げるのだ。",
		'zh-tw': "性情謹慎且狡猾。在偷盜食物逃走的時候會用尾巴擦掉自己的足跡。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "しっぽではたく",
				'zh-tw': "擺尾拍擊",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571615,
				tcgplayer: 569355,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [827],
};

export default card;
