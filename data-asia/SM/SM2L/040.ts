import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメルゴン",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		ja: "すごく 人懐っこい ポケモン。 構わないでいると 寂しくて ヌルヌルの 涙を 流し 鳴く。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "パワーウィップ" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、このポケモンについているエネルギーの数x20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ビートスライダー" },
			damage: 130,
			cost: ["Water", "Fairy", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561444,
			},
		},
	],

	evolveFrom: {
		ja: "ヌメイル",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [706],
};

export default card;
