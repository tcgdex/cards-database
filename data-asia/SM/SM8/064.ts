import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ブルー",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 70,
	types: ["Fairy"],

	description: {
		ja: "唸り声は 相手を 不安に させる。 普段は のんびり屋で １日の 半分は 寝ているよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちらかす" },
			damage: "20×",
			cost: ["Fairy"],
			effect: {
				ja: "自分の手札にあるトレーナーズを2枚までトラッシュし、その枚数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558703,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [209],
};

export default card;
