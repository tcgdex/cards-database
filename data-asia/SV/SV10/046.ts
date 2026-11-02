import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "オコリザル",
		'zh-tw': "火爆猴",
		'zh-cn': "火爆猴",
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "だれかの 視線を 感じただけで 猛烈に 怒りだす。 そして 目が合った ものを 追いかけるのだ。",
		'zh-tw': "光是感覺到他方的視線 都會暴怒起來，然後去追 和牠對到眼的傢伙。",
		'zh-cn': "光是感覺到他方的視線 都會暴怒起來，然後去追 和牠對到眼的傢伙。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ひきずりだす",
				'zh-tw': "拖出",
				'zh-cn': "拖出",
			},
			cost: ["Fighting"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに30ダメージ。",
				'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到30點傷害。",
				'zh-cn': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821878,
				tcgplayer: 628687,
			},
		},
	],

	evolveFrom: {
		ja: "マンキー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [57],
};

export default card;
