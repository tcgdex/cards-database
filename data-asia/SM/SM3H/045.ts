import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "バッフロン",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "見境なく 突進して 頭突きを 食らわせる。 走っている 列車を 脱線させる 破壊力。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アフロヘッド" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "つきくずす" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、場に出ているスタジアムをトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561109,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [626],
};

export default card;
