import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ダダリン",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "海に 漂う モズクの 魂が 生まれ変わった。 海の ゴミを モズクに 絡めて 身体を 保つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ギガドレイン" },
			damage: 30,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			},
		},
		{
			name: { ja: "だいかいてん" },
			damage: 130,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558975,
			},
		},
	],

	retreat: 3,
	rarity: "Uncommon",
	dexId: [781],
};

export default card;
