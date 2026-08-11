import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "アルセウスV",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "トリニティチャージ" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを3枚まで選び、自分の「ポケモンV」に好きなようにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "パワーエッジ" },
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 574302,
				tcgplayer: 597440,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [493],
};

export default card;
