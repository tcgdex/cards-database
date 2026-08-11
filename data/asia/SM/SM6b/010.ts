import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグカルゴ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'ja-jp': "体は いつも 波打っていて 溶岩のように 熱い。 ときどき 殻から 火の粉が漏れる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じならし" },
			effect: {
				'ja-jp': "自分の番に1回使える。自分の山札から好きなカードを1枚選ぶ。残りの山札を切り、選んだカードを山札の上にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かえん" },
			damage: 50,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559160,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マグマッグ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [219],
};

export default card;
