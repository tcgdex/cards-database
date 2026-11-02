import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ガルーラ",
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "子どもの いない ガルーラが 遭難した 人間の 子を 育てていたという 記録がある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっぱたく" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ピヨピヨパンチ" },
			damage: "90×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×90ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821942,
				tcgplayer: 629051,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [115],
};

export default card;
