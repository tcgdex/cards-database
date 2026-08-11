import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトカゲ",
	},

	illustrator: "Orca",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "尻尾の 炎は ヒトカゲの 生命力の 証。 元気だと さかんに 燃えさかる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほのおのツメ" },
			damage: 30,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863377,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [4],
};

export default card;
