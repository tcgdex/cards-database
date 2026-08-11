import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "コイル",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "電磁波を 放ち 空を 漂う。 電気を 喰っているときに 触ると 全身が ビリッと 痺れるぞ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ハードユニット" },
			effect: {
				ja: "このポケモンは、ベンチにいるかぎり、ワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 20,
			cost: ["Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559989,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [81],
};

export default card;
