import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エリキテル",
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "頭の ひだを 広げ 太陽の 光で 発電すると パワフルな 電気技を 出せるようになる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もってくる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "バチバチ" },
			damage: 10,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863556,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [694],
};

export default card;
