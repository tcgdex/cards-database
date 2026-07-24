import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "アブソル",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "災いを もたらすと いわれるが 実際には おだやかな 性質。 災害の 危機を 人に 伝える。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "あくのはき" },
			effect: {
				ja: "このポケモンがいるかぎり、相手のバトル場のたねポケモンのにげるためのエネルギーは、1個ぶん多くなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "シャドーシーカー" },
			damage: "30+",
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数x30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544001,
			},
		},
	],

	retreat: 1,
	regulationMark: "B",
	rarity: "None",
	dexId: [359],
};

export default card;
