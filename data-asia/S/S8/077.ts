import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメイル",
		'zh-tw': "黏美兒",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	description: {
		ja: "背中の 突起の 中に 小さな 脳みそが ある。 エサと 敵から 逃げることしか 考えていない。",
		'zh-tw': "背上的突起物裡裝著牠小小的腦子，裡面只想著吃飯和逃離敵人這兩件事。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "とかす",
				'zh-tw': "溶解",
			},
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "のしかかり",
				'zh-tw': "泰山壓頂",
			},
			damage: 50,
			cost: ["Water", "Psychic"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575632,
				tcgplayer: 569578,
			},
		},
	],

	evolveFrom: {
		ja: "ヌメラ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Common",
	dexId: [705],
};

export default card;
