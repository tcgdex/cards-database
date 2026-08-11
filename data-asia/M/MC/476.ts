import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "モノズ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "なんにでも かみつく 習性。 食べられるものは なんでも 食べる。 うかつに 近寄ると 危険だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "のしかかり" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "やみのキバ" },
			damage: 50,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863778,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [633],
};

export default card;
