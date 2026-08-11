import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アオキのムクバード",
	},

	illustrator: "Fujimoto Gold",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "大きな グループを 作って 行動する 習性。 グループ同士の 争いは 激しい。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はばたく" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "するどいはね" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863893,
			},
		},
	],

	evolveFrom: {
		ja: "アオキのムックル",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [397],
};

export default card;
