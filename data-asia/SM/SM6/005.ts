import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "コフーライ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "硬い 体は とりポケモンの クチバシでも 傷ひとつ つかない。 粉を まき散らして 防戦する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いとをはく" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559550,
			},
		},
	],

	evolveFrom: {
		ja: "コフキムシ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [665],
};

export default card;
