import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ニンフィアVMAX",
		'zh-tw': "仙子伊布VMAX",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "プレシャスタッチ",
				'zh-tw': "貴重之觸",
			},
			cost: ["Psychic"],
			effect: {
				ja: "自分の手札からエネルギーを1枚選び、自分のベンチポケモンにつける。その後、そのポケモンのHPを「120」回復する。",
				'zh-tw': "從自己的手牌選擇1張能量卡，附於自己的備戰寶可夢身上。然後，將那隻寶可夢恢復「120」HP。",
			},
		},
		{
			name: {
				ja: "ダイハーモニー",
				'zh-tw': "極巨和諧",
			},
			damage: "70+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンのタイプの数×30ダメージ追加。",
				'zh-tw': "增加自己的備戰寶可夢的屬性種類的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586591,
				tcgplayer: 571328,
			},
		},
	],

	evolveFrom: {
		ja: "ニンフィアV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [700],
};

export default card;
