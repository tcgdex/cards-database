import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "マナフィ",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "どんな ポケモンとでも 心を 通い合わせる ことが できる 不思議な 能力を 持っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひきこむかいりゅう" },
			cost: ["Water"],
			effect: {
				ja: "相手の手札を見て、その中からたねポケモンを2枚まで選び、相手のベンチに出す。",
			},
		},
		{
			name: { ja: "アクアバレット" },
			damage: 40,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650565,
				tcgplayer: 597459,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [490],
};

export default card;
