import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "パチリス",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "たまった 電気を 分け与えようと ほほ袋を こすり合わせる パチリスを 見かけることも ある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "オーバーショート" },
			damage: "20+",
			cost: ["Lightning"],
			effect: {
				ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。トラッシュした場合、40ダメージ追加し、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558916,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [417],
};

export default card;
