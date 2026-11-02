import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ニューラ",
		'zh-tw': "狃拉",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ずる賢く 獰猛な 性質。 親が いない 隙に 巣穴に 侵入。 タマゴを 盗みだす。",
		'zh-tw': "性格狡猾且凶猛。會趁著雙親不在時侵入巢穴把蛋盜走。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "きりおとす",
				'zh-tw': "切落",
			},
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560745,
				tcgplayer: 569239,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [215],
};

export default card;
