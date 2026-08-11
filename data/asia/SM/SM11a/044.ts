import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "コマタナ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "獲物を 切り裂いたあとは 河原の 石で 刃を 研ぐ。 それぞれの コマタナに お気に入りの 石がある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふくろぎり" },
			cost: ["Colorless"],
			effect: {
				ja: "相手の手札を見て、その中にあるグッズを、1枚トラッシュする。",
			},
		},
		{
			name: { ja: "チクチクさす" },
			damage: 20,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556692,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [624],
};

export default card;
