import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキハミ",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "エサは 地面に 積もった 雪。 柔らかな 新雪を 好み 山頂 目指して 食べ進む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こなゆき" },
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752854,
				tcgplayer: 568407,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [872],
};

export default card;
