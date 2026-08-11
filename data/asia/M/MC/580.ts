import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オオスバメ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "森に 住む 獲物を 見つけると 上空から 急降下。 鋭い ツメで 捕まえる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "くわえる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を3枚引く。",
			},
		},
		{
			name: { ja: "スピードウイング" },
			damage: 70,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863882,
			},
		},
	],

	evolveFrom: {
		ja: "スバメ",
	},

	retreat: 0,
	regulationMark: "I",
	rarity: "None",
	dexId: [277],
};

export default card;
