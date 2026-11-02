import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "コイキング",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		ja: "力のない 情けない ポケモン。 たまに 高く 飛び跳ねても ２メートルを 超すのが やっとだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はねじょうず" },
			damage: "10+",
			cost: ["Water"],
			effect: {
				ja: "コインを2回投げ、すべてオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908343,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Classic Collection",
	dexId: [129],
};

export default card;
