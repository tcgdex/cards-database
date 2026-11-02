import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "アブソル",
		'zh-tw': "阿勃梭魯",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "老人は わざわいポケモンと 呼び 忌み嫌うが 災害を 予知 する 力に 関心が 高まっている。",
		'zh-tw': "老人們稱呼牠為災禍寶可夢，對牠十分忌諱。但目前牠預知災害的能力正越來越受到重視。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひきずりだす",
				'zh-tw': "拖出",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに30ダメージ。",
				'zh-tw': "選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到30點傷害。",
			},
		},
		{
			name: {
				ja: "きりさく",
				'zh-tw': "劈開",
			},
			damage: 80,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571610,
				tcgplayer: 569350,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [359],
};

export default card;
