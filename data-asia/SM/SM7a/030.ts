import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼブライカ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "稲妻のような 瞬発力。 ゼブライカが 全速力で 走ると 雷鳴が 響きわたる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はやがけ" },
			effect: {
				ja: "自分の番に1回使える。自分の手札をすべてトラッシュし、山札を4枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヘッドボルト" },
			damage: 60,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558918,
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
