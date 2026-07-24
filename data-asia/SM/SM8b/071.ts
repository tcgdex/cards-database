import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "モノズ",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "目が 見えないため 体当たりしたり かみついて まわりを 探る。 体中 生傷が 絶えない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ずつき" },
			damage: 20,
			cost: ["Darkness", "Colorless"],
		},
		{
			name: { ja: "ふいをつく" },
			damage: 60,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550841,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [633],
};

export default card;
