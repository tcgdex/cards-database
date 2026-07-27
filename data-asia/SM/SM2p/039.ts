import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤミラミ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "宝石が 好物で メレシーを 狙って 付け回しているが ガバイトに 横取り されてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "そくばく" },
			cost: ["Darkness"],
			effect: {
				ja: "次の相手の番、相手は手札からサポートを出して使えない。",
			},
		},
		{
			name: { ja: "ひっかく" },
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561283,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [302],
};

export default card;
