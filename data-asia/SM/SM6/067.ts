import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメイル",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	description: {
		ja: "歯が ないので なんでも 溶かす 粘液を 獲物に かけて 溶かしてから すすって 喰らう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "すいとる" },
			damage: 30,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
		{
			name: { ja: "ぶちかます" },
			damage: 50,
			cost: ["Water", "Fairy", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559612,
			},
		},
	],

	evolveFrom: {
		ja: "ヌメラ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [705],
};

export default card;
