import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "メガエルレイドex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 350,
	types: ["Fighting"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "はやてぎり" },
			damage: "50+",
			cost: ["Fighting"],
			effect: {
				ja: "このポケモンにダメカンがのっていないなら、150ダメージ追加。",
			},
		},
		{
			name: { ja: "マーベラスエッジ" },
			damage: 240,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864280,
			},
		},
	],

	evolveFrom: {
		ja: "キルリア",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Promo",
	dexId: [475],

	suffix: "EX",
};

export default card;
