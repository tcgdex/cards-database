import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "オンバーンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Dragon"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ディストーション" },
			damage: 50,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "次の相手の番、相手は手札からグッズを出して使えない。",
			},
		},
		{
			name: { ja: "ラウドソニック" },
			damage: 120,
			cost: ["Psychic", "Darkness", "Colorless"],
			effect: {
				ja: "次の相手の番、相手は手札から特殊エネルギーを出してつけられない。",
			},
		},
		{
			name: { ja: "ばくおんぱGX" },
			cost: ["Psychic", "Darkness", "Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551701,
			},
		},
	],

	evolveFrom: {
		ja: "オンバット",
	},

	retreat: 0,
	rarity: "Ultra Rare",
	dexId: [715],

	suffix: "GX",
};

export default card;
