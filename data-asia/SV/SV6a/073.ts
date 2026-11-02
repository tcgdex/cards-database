import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾウドウ",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "５トンの 荷物を 持ち上げられる。 朝になると 群れで 洞窟へと 向かい エサの 鉱石を 探す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 30,
			cost: ["Metal", "Colorless"],
		},
		{
			name: { ja: "がちんこ" },
			damage: 70,
			cost: ["Metal", "Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773822,
				tcgplayer: 566324,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [878],
};

export default card;
