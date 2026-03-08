import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ケルディオex",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しっぷうづき" },
			damage: "30+",
			cost: ["Water", "Colorless"],
			effect: {
				ja: "この番に、このポケモンがベンチからバトル場に出ていたなら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "ソニックエッジ" },
			damage: 120,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
	dexId: [647],
	thirdParty: {
		cardmarket: 829029,
		tcgplayer: 636580,
	},
};

export default card;
