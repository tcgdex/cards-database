import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "バニプッチ",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "氷柱から 生まれたポケモン。 冷たい 息で 雪の 結晶を つくって 雪を 降らせる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "トリプルスピン" },
			damage: "10×",
			cost: ["Water"],
			effect: {
				ja: "コインを3回投げ、オモテの数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561483,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [582],
};

export default card;
