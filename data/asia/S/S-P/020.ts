import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "コオリッポV",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "れいききゅうしゅう" },
			effect: {
				ja: "自分の番に、自分の手札から[水]エネルギーをこのポケモンにつけるたび、このポケモンのHPを「30」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ふぶき" },
			damage: 120,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 462999,
				tcgplayer: 597240,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [875],
};

export default card;
