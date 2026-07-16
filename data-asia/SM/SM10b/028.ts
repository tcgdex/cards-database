import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "マタドガス",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "どちらかが ふくらむと 片方は しぼむ 双子の ドガース。 いつも 体内の 毒ガスを 混ぜている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ホワイトホール" },
			effect: {
				ja: "自分の番に、このカードが「ムサシとコジロウ」の効果でトラッシュされたとき、1回使える。相手は相手自身の手札を、1枚トラッシュする。（トラッシュするのは「ムサシとコジロウ」の効果のあと。）",
			},
		},
	],

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 40,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557229,
			},
		},
	],

	evolveFrom: {
		ja: "ドガース",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [110],
};

export default card;
