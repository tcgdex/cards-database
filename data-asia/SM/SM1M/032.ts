import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "マケンカニ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "なぐり過ぎで ハサミは よく もげるが すぐに 生える。 ハサミの 中味は 少ないが コクがあって うまいぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "パンチ" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "クラブハンマー" },
			damage: 40,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561633,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [739],
};

export default card;
