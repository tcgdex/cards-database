import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "セレビィ",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "時を 超える 力を もつ。 森の 神様として さまざまな 時代に 記録が 残されている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "もってくる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
			},
		},
		{
			name: { ja: "リーフステップ" },
			damage: 30,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863316,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [251],
};

export default card;
