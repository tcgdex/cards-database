import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "レシラムV",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きらめくつばさ" },
			cost: ["Fire"],
			effect: {
				ja: "自分の山札から基本エネルギーを2枚まで選び、自分のポケモン1匹につける。そして山札を切る。",
			},
		},
		{
			name: { ja: "ホワイトブレイズ" },
			damage: 200,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673393,
				tcgplayer: 570839,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [643],
};

export default card;
