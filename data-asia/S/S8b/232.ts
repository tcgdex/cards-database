import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ニンフィアVMAX",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "プレシャスタッチ" },
			cost: ["Psychic"],
			effect: {
				ja: "自分の手札からエネルギーを1枚選び、自分のベンチポケモンにつける。その後、そのポケモンのHPを「120」回復する。",
			},
		},
		{
			name: { ja: "ダイハーモニー" },
			damage: "70+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンのタイプの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587030,
				tcgplayer: 571484,
			},
		},
	],

	evolveFrom: {
		ja: "ニンフィアV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [700],
};

export default card;
