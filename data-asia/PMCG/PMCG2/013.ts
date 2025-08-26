import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "nidoqueen",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [31],
	hp: 90,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "彼氏",
			},
			effect: {
				ja: "20のダメージに加えて、プレイ中のニドキングごとに20ダメージをさらに20回かけます。",
			},

		},
		{
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
			name: {
				ja: "メガパンチ",
			},
			damage: 50,
		},
	],

	retreat: 3,

	variants : [
		{
			type: "holo",
		},
	],
};

export default card
