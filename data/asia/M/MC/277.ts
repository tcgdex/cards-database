import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "タイカイデン",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "のど袋に 翼で 作った 電気を 溜める。 羽の 油分が とても 少なく 泳ぎは 苦手。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かっくう" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ストームボルト" },
			damage: 160,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーをすべて、ベンチポケモンに好きなようにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863573,
			},
		},
	],

	evolveFrom: {
		ja: "カイデン",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [941],
};

export default card;
