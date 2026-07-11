import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// charmeleon
		ja: "リザード",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [5],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "スラッシュ",
			},
			damage: 30,
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "火炎放射器",
			},
			effect: {
				ja: "このポケモンから火エネルギーを捨ててください。",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575634
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577061
			},
		}
	],
};

export default card
