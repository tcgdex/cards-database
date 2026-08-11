import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "パルスワンV",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スマッシュターン" },
			damage: 30,
			cost: ["Lightning"],
			effect: {
				'ja-jp': "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "エレキバレット" },
			damage: 120,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576182,
				tcgplayer: 569605,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [836],
};

export default card;
