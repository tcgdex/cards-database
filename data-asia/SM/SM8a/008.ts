import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼブライカ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "稲妻のような 瞬発力。 ゼブライカが 全速力で 走ると 雷鳴が 響きわたる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "しゅうげき" },
			damage: "30+",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "この番、このポケモンが「シママ」から進化していたなら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "マッハボルト" },
			damage: 100,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558582,
			},
		},
	],

	evolveFrom: {
		ja: "シママ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [523],
};

export default card;
