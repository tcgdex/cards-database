import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "クルマユ",
	},

	illustrator: "313",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "クルマユの 住む 森は 草木が よく 育つ。 クルマユが 落ち葉を 栄養分に 変えているのだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はっぱヒール" },
			effect: {
				ja: "自分の番に1回使える。自分のバトルポケモンのHPを「20」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "むしのさざめき" },
			damage: 40,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		ja: "クルミル",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [541],
	thirdParty: {
		cardmarket: 829441,
		tcgplayer: 636641,
	},
};

export default card;
