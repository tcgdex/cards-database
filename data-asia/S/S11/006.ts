import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "コノハナ",
		'zh-tw': "長鼻葉",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "森の 奥深くに 生息。 頭の 葉っぱで 笛を 作り 不安に させる 音色を 出す。",
		'zh-tw': "棲息在森林深處。會用頭上的葉子做成笛子， 吹出令人感到不安的音色。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "つきとばす",
				'zh-tw': "推倒",
			},
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "のぞむなら、相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
				'zh-tw': "若希望，將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667609,
				tcgplayer: 569937,
			},
		},
	],

	evolveFrom: {
		ja: "タネボー",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [274],
};

export default card;
