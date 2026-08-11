import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ウォーグル",
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "仲間のため 危険を かえりみず 戦う。 自動車を つかんだまま 大空を 舞う ことが できる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "つばさでうつ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "デュアルカッター" },
			damage: "80×",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数x80ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563507,
				tcgplayer: 605331,
			},
		},
	],

	evolveFrom: {
		ja: "ワシボン",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [628],
};

export default card;
