import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨーテリー",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "キャンキャン 吠えたり しないので マンション暮らしの トレーナーに 人気の 高い ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふるいたてる" },
			cost: ["Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+20」される。",
			},
		},
		{
			name: { ja: "かみつく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561723,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [506],
};

export default card;
