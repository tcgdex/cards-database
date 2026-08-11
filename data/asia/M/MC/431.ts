import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アーボック",
	},

	illustrator: "Minato",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "お腹の 模様が 怖い 顔に 見える。 弱い 敵は その模様を 見ただけで 逃げ出してしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "パニックどく" },
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをどくとやけどとこんらんにする。",
			},
		},
		{
			name: { ja: "やみのキバ" },
			damage: 70,
			cost: ["Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863733,
			},
		},
	],

	evolveFrom: {
		ja: "アーボ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [24],
};

export default card;
