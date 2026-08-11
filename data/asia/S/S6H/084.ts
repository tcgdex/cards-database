import { Card } from "models/database/card";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "はくばバドレックスVMAX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "エンペラーライド" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモンの数×30ダメージ追加。",
			},
		},
		{
			name: { ja: "ダイランス" },
			damage: "10+",
			cost: ["Water", "Water"],
			effect: {
				'ja-jp': "のぞむなら、このポケモンについているエネルギーを2枚まで選び、トラッシュする。その場合、トラッシュした枚数×120ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560961,
				tcgplayer: 569216,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "はくばバドレックスV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Hyper rare",
	dexId: [898],
};

export default card;
