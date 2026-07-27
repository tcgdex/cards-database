import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "グレイシアV",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フロストチャージ" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "自分の山札から[W]エネルギーを1枚選び、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "フリーズウインド" },
			damage: 130,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 604994,
				tcgplayer: 597443,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [471],
};

export default card;
