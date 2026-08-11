import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニンフィアex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "マジカルチャーム" },
			damage: 160,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-100」される。",
			},
		},
		{
			name: { ja: "エンジェライト" },
			cost: ["Water", "Lightning", "Psychic"],
			effect: {
				'ja-jp': "相手のベンチポケモンを2匹選び、そのポケモンと、ついているすべてのカードを、山札にもどして切る。前の自分の番に、自分のポケモンが「エンジェライト」を使っていたなら、このワザは使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863601,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イーブイ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [700],

	suffix: "EX",
};

export default card;
