import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガブリアス&ギラティナGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 270,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょくげきだん" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、40ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "カラミティエッジ" },
			damage: "160+",
			cost: ["Psychic", "Fighting", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、80ダメージ追加。",
			},
		},
		{
			name: { ja: "ジージーエンドGX" },
			cost: ["Psychic", "Psychic", "Fighting"],
			effect: {
				ja: "相手のポケモン1匹と、ついているすべてのカードを、トラッシュする。追加で[闘]エネルギーが3個ついているなら、トラッシュするポケモンの数は2匹になる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 547216,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Secret Rare",
	dexId: [445, 487],

	suffix: "TAG TEAM-GX",
};

export default card;
