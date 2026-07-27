import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピッピ",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],

	description: {
		ja: "人気だが 数が 少ないので 貴重。 むやみに 見せびらかすと 泥棒に 狙われるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おうふくビンタ" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558219,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [35],
};

export default card;
