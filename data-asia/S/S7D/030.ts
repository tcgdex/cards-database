import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ダストダスV",
		'zh-tw': "灰塵山V",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ゴミしゅうき",
				'zh-tw': "垃圾臭氣",
			},
			damage: 40,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
		{
			name: {
				ja: "ヘドロばくだん",
				'zh-tw': "污泥炸彈",
			},
			damage: 130,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 571613,
				tcgplayer: 569353,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [569],
};

export default card;
