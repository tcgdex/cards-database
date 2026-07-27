import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ロゼリア",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "栄養満点の わき水を 飲んだ ロゼリアは 珍しい 色の 花を 咲かせる らしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はなびらのまい" },
			damage: "30×",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数x30ダメージ。このポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559957,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [315],
};

export default card;
