import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "アーゴヨン&アクジキングGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぼうしょく" },
			effect: {
				ja: "自分の番に1回使える。自分の手札にあるポケモンを1枚トラッシュする。その後、このポケモンのHPを「60」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ジェットピアス" },
			damage: 180,
			cost: ["Psychic", "Darkness", "Colorless"],
		},
		{
			name: { ja: "カオスオーダーGX" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のサイドをすべてオモテにする（対戦が終わるまで、そのサイドはオモテのまま）。追加で[超]エネルギーと[悪]エネルギーが1個ずつついているなら、自分のサイドを2枚とる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555098,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [804, 799],

	suffix: "TAG TEAM-GX",
};

export default card;
