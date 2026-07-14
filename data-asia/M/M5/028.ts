import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤドン",
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "水辺で ボーッとしている。 なにかが 尻尾に 噛みついても まる１日 気づかない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "すてほうだい" },
			cost: ["Psychic"],
			effect: {
				ja: "自分の手札を好きなだけ選び、トラッシュする。",
			},
		},
		{
			name: { ja: "ずつき" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "normal" }],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [79],

	thirdParty: {
		cardmarket: 888271,
	},
};

export default card;
