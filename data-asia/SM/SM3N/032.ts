import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "バンバドロ",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "口から 吐く 泥は 固まると 雨風にも 強いので 昔の 家の 壁には よく塗られている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "けりとばす" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "ばくしん" },
			damage: 130,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561032,
			},
		},
	],

	evolveFrom: {
		ja: "ドロバンコ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [750],
};

export default card;
