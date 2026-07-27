import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アクジキング",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	description: {
		ja: "危険生物 ビーストの 一種。 つねに なにかを 喰らっているようだが なぜか フンは 未発見。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "キングスバレイ" },
			damage: 160,
			cost: ["Darkness", "Darkness", "Darkness", "Darkness"],
			effect: {
				ja: "自分のサイドの残り枚数が6枚・4枚・2枚なら、自分の山札を上から10枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550861,
			},
		},
	],

	retreat: 4,
	rarity: "None",
	dexId: [799],
};

export default card;
