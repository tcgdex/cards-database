import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "サザンドラex",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "クラッシュヘッズ" },
			damage: 200,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手の山札を上から3枚トラッシュする。",
			},
		},
		{
			name: { ja: "オブシディアン" },
			damage: 130,
			cost: ["Psychic", "Darkness", "Metal", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン2匹にも、それぞれ130ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793598,
				tcgplayer: 587700,
			},
		},
	],

	evolveFrom: {
		ja: "ジヘッド",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Special illustration rare",
	dexId: [635],

	suffix: "EX",
};

export default card;
