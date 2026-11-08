import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キュレムex",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],

	description: {
		'ja-jp': "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ブリザードバースト" },
			damage: 130,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン全員にも、それぞれ、相手がすでにとったサイドの枚数×10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [646],

	suffix: "EX",

	thirdParty: {
		cardmarket: 829429,
		tcgplayer: 636522,
	},
};

export default card;
