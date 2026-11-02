import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "ポチエナ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "鋭い きゅうかくで ねらった 獲物は 絶対に 逃がさない。 とっても しつこい 性格だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やみのとおぼえ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある[悪]ポケモンを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "かみつく" },
			damage: 10,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558595,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [261],
};

export default card;
