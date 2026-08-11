import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "スイクン",
	},

	illustrator: "Kuroimori",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "世界中を 駆け巡り 汚れた 水を 清めている。 北風と ともに 走り去る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かけぬける" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "オーロラビーム" },
			damage: 100,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863470,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [245],
};

export default card;
