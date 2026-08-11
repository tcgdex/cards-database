import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "アクジキングGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "くいちらかす" },
			cost: ["Darkness"],
			effect: {
				ja: "自分の山札を上から5枚トラッシュし、その中にあるエネルギーをすべて、このポケモンにつける。",
			},
		},
		{
			name: { ja: "タイラントホール" },
			damage: 180,
			cost: ["Darkness", "Darkness", "Darkness", "Colorless", "Colorless"],
		},
		{
			name: { ja: "グラトニーGX" },
			damage: 100,
			cost: ["Darkness", "Darkness", "Darkness", "Darkness", "Darkness"],
			effect: {
				ja: "このワザのダメージで、相手のポケモンがきぜつしたなら、サイドを2枚多くとる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560098,
			},
		},
	],

	retreat: 4,
	rarity: "Double rare",
	dexId: [799],

	suffix: "GX",
};

export default card;
