import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "チルット",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "人の 頭の 上に ちょこんと 乗って 帽子のように ふるまうのが なぜか 大好き。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はしゃぐ" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "つつく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899962,
				tcgplayer: 709208,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [333],
};

export default card;
