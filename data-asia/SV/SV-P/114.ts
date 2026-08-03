import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "デカヌチャン",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "知能が 高く とても 豪快。 ハンマーで 岩を 殴り飛ばして 空飛ぶ アーマーガアを 狙う。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "はたきおとす" },
			damage: 40,
			cost: ["Psychic"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			},
		},
		{
			name: { ja: "ワイルドプレス" },
			damage: 220,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 740415,
				tcgplayer: 587864,
			},
		},
	],

	evolveFrom: {
		ja: "ナカヌチャン",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [959],
};

export default card;
