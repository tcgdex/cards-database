import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "シシコ",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "幼い頃は 仲間と 群れている。 自分で 獲物を 狩るようになると 群れから 追い出され 独り立ちする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Fire"],
		},
		{
			name: { ja: "ほのおのしっぽ" },
			damage: 20,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554783,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [667],
};

export default card;
