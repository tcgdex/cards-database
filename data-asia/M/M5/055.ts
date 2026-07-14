import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "オラチフ",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "発達した あごと キバは 岩を 噛み砕く 力強さ。 厚い 脂肪は 防御力 抜群。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 40,
			cost: ["Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [942],

	thirdParty: {
		cardmarket: 888311,
	},
};

export default card;
