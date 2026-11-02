import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ズピカ",
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		ja: "体に 蓄えた 電力で 浮遊する。 雷雲のときは いつもより 高く 浮き上がるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "エレキボール" },
			damage: 20,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863567,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [938],
};

export default card;
