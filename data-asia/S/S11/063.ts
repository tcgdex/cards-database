import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "スナバァ",
		'zh-tw': "沙丘娃",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "砂山に 死者の 怨念が 宿り ポケモンに なった。 頭の スコップは お気に入り。",
		'zh-tw': "死者的怨念附在沙丘上，從而變成的寶可夢。 很喜歡頭上的鏟子。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "おいつめる",
				'zh-tw': "窮追不捨",
			},
			damage: 10,
			cost: ["Fighting"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667938,
				tcgplayer: 569994,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [769],
};

export default card;
