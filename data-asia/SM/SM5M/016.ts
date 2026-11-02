import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "エレキブル",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "興奮すると 胸を 打ち鳴らす。 そのたびに 電気火花が 散り 雷鳴が あたりに 響き渡る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スチールショート" },
			damage: 60,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが[鋼]ポケモンなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ボルトナックル" },
			damage: 130,
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559829,
			},
		},
	],

	evolveFrom: {
		ja: "エレブー",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [466],
};

export default card;
