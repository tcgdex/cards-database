import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "タイカイデンex",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "Attack" },
			damage: 1,
			cost: ["Lightning"],
		},
		{
			name: { ja: "サンダーランス" },
			damage: "40+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[L]エネルギーの数×40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 766671,
				tcgplayer: 587898,
			},
		},
	],

	evolveFrom: {
		ja: "カイデン",
	},

	retreat: 0,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [941],

	suffix: "EX",
};

export default card;
