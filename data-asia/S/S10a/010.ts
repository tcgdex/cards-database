import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキノオー",
		'zh-tw': "暴雪王",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		ja: "大きな 腕を ハンマーの ように 振り下ろし ユキカブリを 狙う ダルマッカの 群れを 追い払う。",
		'zh-tw': "會像揮動鎚子般揮下自己大大的手臂，趕走要襲擊 雪笠怪的火紅不倒翁群體。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "つららパンチ",
				'zh-tw': "冰柱拳",
			},
			damage: 50,
			cost: ["Water", "Colorless"],
		},
		{
			name: {
				ja: "すてみタックル",
				'zh-tw': "捨身衝撞",
			},
			damage: 160,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
				'zh-tw': "這隻寶可夢也受到30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656237,
				tcgplayer: 570673,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577097,
			},
		},
	],

	evolveFrom: {
		ja: "ユキカブリ",
	},

	retreat: 4,
	regulationMark: "F",
	rarity: "Common",
	dexId: [460],
};

export default card;
