import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "バサギリVSTAR",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],

	stage: "VSTAR",

	attacks: [
		{
			name: { ja: "ブレイクアックス" },
			damage: 120,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "相手のベンチの「ポケモンV」1匹にも、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ランページスター" },
			damage: "30×",
			cost: ["Fighting"],
			effect: {
				ja: "自分のトラッシュにあるポケモンの枚数×30ダメージ。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651345,
				tcgplayer: 569925,
			},
		},
	],

	evolveFrom: {
		ja: "バサギリV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Holo Rare",
	dexId: [900],
};

export default card;
