import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ミジュマル",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "お腹の ホタチで 戦う。攻撃を 受け止めてから すかさず 切りつけて 反撃するのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "シェルブレード" },
			damage: "10+",
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 891827,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [501],
};

export default card;
