import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウミトリオex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Lightning"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "トリコロポンプ" },
			cost: ["Water"],
			effect: {
				'ja-jp': "自分の手札からエネルギーを3枚までトラッシュし、その枚数×60ダメージを、相手のポケモン1匹に与える。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "しびれホールド" },
			damage: 120,
			cost: ["Water", "Water"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752790,
				tcgplayer: 568359,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ウミディグダ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [961],

	suffix: "EX",
};

export default card;
