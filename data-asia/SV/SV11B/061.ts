import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビル",
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "数匹で 群れを 作る。 眼球を カバーする 膜が 砂嵐から 目を 守る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "シメる" },
			damage: 40,
			cost: ["Darkness", "Colorless"],
			effect: { ja: "相手は相手自身の手札を2枚選び、トラッシュする。" },
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	evolveFrom: {
		ja: "メグロコ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [552],

	thirdParty: {
		cardmarket: 828574,
		tcgplayer: 636415,
	},
};

export default card;
