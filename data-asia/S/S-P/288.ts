import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラナッシーV",
	},

	illustrator: "MUGENUP",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "のびのびそだつ" },
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げオモテなら、自分の山札から[G]エネルギーを5枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "ブンブンヘッド" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、このポケモンについている[G]エネルギーの数×30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 664343,
				tcgplayer: 597461,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [103],
};

export default card;
