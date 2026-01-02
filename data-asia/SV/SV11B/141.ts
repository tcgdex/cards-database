import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "メグロコ",
	},

	illustrator: "Fujimoto Gold",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "砂漠の 砂の 中で 生活。 太陽に 暖められた 砂が 体温の 低下を 防ぐのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "シメる" },
			damage: 10,
			cost: ["Darkness"],
			effect: { ja: "相手は相手自身の手札を1枚選び、トラッシュする。" },
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [551],
};

export default card;
