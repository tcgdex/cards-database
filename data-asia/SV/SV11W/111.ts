import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "シママ",
	},

	illustrator: "Natsumi Miyanose",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "放電すると たてがみが 光る。 たてがみの 光り方で 仲間と コミュニケーションを とっている。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "けとばす" }, damage: 10, cost: ["Colorless"] },
		{
			name: { ja: "エレキック" },
			damage: 30,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [522],
	thirdParty: {
		cardmarket: 829467,
		tcgplayer: 636664,
	},
};

export default card;
