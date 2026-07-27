import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ムウマ",
		'zh-tw': "夢妖",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "人が 泣き叫ぶ 声を 真似て みんなを おびえさせ 喜ぶ。 肝が 据わった 相手は 苦手。",
		'zh-tw': "會藉由模仿人哭叫的聲音嚇唬大家來取樂。 不擅長應付膽大的對手。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "あやしいひかり",
				'zh-tw': "奇異之光",
			},
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【混亂】。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656326,
				tcgplayer: 570688,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577108,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [200],
};

export default card;
