import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲコガシラ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "身軽さは だれにも 負けない。 ６００メートルを 超える タワーの 天辺まで １分で 登りきる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いあいぎり" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563488,
				tcgplayer: 605337,
			},
		},
	],

	evolveFrom: {
		ja: "ケロマツ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [657],
};

export default card;
