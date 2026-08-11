import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "カチコール",
		'zh-tw': "冰寶",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "極寒の 地域に 生息する。 クレベースの 背中と 自分の 足を 凍りつかせて 固定する。",
		'zh-tw': "棲息在極其寒冷的地域。會把自己的腳凍在冰岩怪的背上固定起來。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "自然回復",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "かいてんアタック",
				'zh-tw': "幸福轟炸",
			},
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560441,
				tcgplayer: 569157,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [712],
};

export default card;
