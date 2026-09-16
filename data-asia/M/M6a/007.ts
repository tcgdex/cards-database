import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホウオウ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "体は 七色に 輝き 飛んだあとは 虹が できると 神話に 残されている ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "せいなるいぶき" },
			cost: ["Fire", "Fire"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。自分のベンチポケモン1匹のHPを、すべて回復する。",
			},
		},
		{
			name: { ja: "ほのおのつばさ" },
			damage: 100,
			cost: ["Fire", "Fire", "Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908185,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [250],
};

export default card;
