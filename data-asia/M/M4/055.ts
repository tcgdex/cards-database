import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ダストダス",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ゴミダウナー" },
			effect: {
				ja: "相手のバトルポケモンにポケモンのどうぐがついているなら、そのポケモンのワザのダメージは「20」少なくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヘドロばくだん" },
			damage: 100,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "ヤブクロン",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [569],
};

export default card;
