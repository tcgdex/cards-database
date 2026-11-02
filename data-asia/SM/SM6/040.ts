import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "フーパ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "気に入った ものを リングを 使い 秘密の 住処へ 集めている。 リングを 潜って テレポートする。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いじげんリング" },
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札にあるグッズを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ねんりき" },
			damage: 10,
			cost: ["Psychic"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559585,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [720],
};

export default card;
