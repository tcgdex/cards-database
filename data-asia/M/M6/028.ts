import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "タイカイデン",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "のど袋に 翼で 作った 電気を 溜める。 羽の 油分が とても 少なく 泳ぎは 苦手。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "しゅうげき" },
			damage: "30+",
			cost: ["Lightning"],
			effect: {
				ja: "この番に、このポケモンが「カイデン」から進化していたなら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "スピードひこう" },
			damage: 70,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899931,
				tcgplayer: 709182,
			},
		},
	],

	evolveFrom: {
		ja: "カイデン",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [941],
};

export default card;
