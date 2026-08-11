import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ペロッパフ",
		'zh-tw': "綿綿泡芙",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "１日に 食べる 砂糖は 自分の 体重と 同じ。 糖分が 足りないと ひどく 不機嫌になる。",
		'zh-tw': "每天要吃掉與自己體重相同重量的砂糖， 糖分不夠就會鬧脾氣。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はねまわる",
				'zh-tw': "活蹦亂跳",
			},
			damage: 10,
			cost: ["Psychic"],
		},
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667922,
				tcgplayer: 569978,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [684],
};

export default card;
