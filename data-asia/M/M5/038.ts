import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "マーシャドー",
	},

	illustrator: "Nakamura Ippan",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "拳法の 達人の 影に 潜って 動きを コピーしたため 究極奥義を 身につけた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かげむすび" },
			damage: "30×",
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888281,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [802],
};

export default card;
