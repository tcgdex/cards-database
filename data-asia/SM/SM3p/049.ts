import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "チョロネコ",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "かわいらしい 仕草で 油断させて その すきに 持ち物を 奪う。 怒ると ツメを 立てて 反撃。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "しっぽビンタ" },
			damage: "20×",
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560207,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [509],
};

export default card;
