import { Card } from "../../../interfaces";
import Set from "../SV11W";

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

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [633],
	thirdParty: {
		cardmarket: 829063,
		tcgplayer: 636613,
	},
};

export default card;
