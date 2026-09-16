import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "リザードン",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "地上１４００メートルまで羽をつかって飛ぶことができる。高熱の炎をはく。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ほのおのうず" },
			damage: 100,
			cost: ["Fire", "Fire", "Fire", "Fire"],
			effect: {
				ja: "自分のエネルギーカードを2枚はがしてすてる。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908315,
			},
		},
	],

	retreat: 3,
	rarity: "Classic Collection",
	dexId: [6],
};

export default card;
