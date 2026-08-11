import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジバコイルV",
		'zh-tw': "自爆磁怪V",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひっぱりじりょく",
				'zh-tw': "拉鋸磁力",
			},
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに40ダメージ。",
				'zh-tw': "選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到40點傷害。",
			},
		},
		{
			name: {
				ja: "スプリットビーム",
				'zh-tw': "分岔光束",
			},
			damage: 90,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン2匹にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的2隻備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656262,
				tcgplayer: 570679,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [462],
};

export default card;
