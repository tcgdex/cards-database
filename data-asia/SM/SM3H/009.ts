import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトカゲ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "尻尾の 炎は ヒトカゲの 生命力の 証。 元気だと さかんに 燃えさかる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ほのおのしっぽ" },
			damage: 20,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561073,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [4],
};

export default card;
