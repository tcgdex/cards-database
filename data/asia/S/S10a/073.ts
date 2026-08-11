import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "頬に 電気を溜めし 袋を 有す。 森林を 棲み処とし 硬き 木の実は 電撃で 焼き 食べる 知恵者なり。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ピカダッシュ" },
			effect: {
				ja: "このポケモンにエネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "きまぐれタックル" },
			damage: 50,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657052,
				tcgplayer: 570736,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Character Rare",
	dexId: [25],
};

export default card;
