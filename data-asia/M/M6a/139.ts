import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのプリン",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みんなでかいふく" },
			cost: ["Colorless"],
			effect: {
				ja: "お互いの場にいるポケモン全員から、それぞれダメージカウンターを1つずつ、とりのぞく。",
			},
		},
		{
			name: { ja: "やさしいパンチ" },
			damage: "40-",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手にダメージカウンターがのっている時、このワザのダメージは「-30」される。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908317,
			},
		},
	],

	retreat: 1,
	rarity: "Classic Collection",
	dexId: [39],
};

export default card;
