import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マケンカニ",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "ハサミは もげても すぐに 生える。 カラから 良い 出汁が でるので パエリアの 具材として 人気。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はさむ" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "クラブハンマー" },
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863703,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [739],
};

export default card;
