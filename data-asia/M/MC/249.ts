import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "シママ",
	},

	illustrator: "kamonabe",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "落雷の 多い 土地を 好む。 たてがみで 雷を 受け止め 体に 電気を 溜めこむのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "くわえる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "バチバチ" },
			damage: 20,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863545,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [522],
};

export default card;
