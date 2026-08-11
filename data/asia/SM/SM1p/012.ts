import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "ニョロゾ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "陸上を 練り歩いて 餌の むしポケモンを 探す。 食べるのは 安全な 水の中。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "おうふくビンタ" },
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数x30ダメージ。",
			},
		},
		{
			name: { ja: "スプラッシュ" },
			damage: 60,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561540,
			},
		},
	],

	evolveFrom: {
		ja: "ニョロモ",
	},

	retreat: 2,
	rarity: "None",
	dexId: [61],
};

export default card;
