import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "チャオブー",
	},

	illustrator: "Aliya Chen",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "食べるほどに 燃やすものが 増えて 胃袋内の 炎が 強まり パワーも どんどん あふれ出すのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほのおでこがす" },
			damage: 70,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863407,
			},
		},
	],

	evolveFrom: {
		ja: "ポカブ",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "None",
	dexId: [499],
};

export default card;
