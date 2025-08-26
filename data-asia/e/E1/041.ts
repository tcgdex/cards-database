import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ハンター",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [93],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "悪夢",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 20,
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "夢の食べる人",
			},
			effect: {
				ja: "防御ポケモンが眠っていない場合、この攻撃は何もしません。",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
