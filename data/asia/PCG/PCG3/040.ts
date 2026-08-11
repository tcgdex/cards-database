import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "slowpoke",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [79],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "密集",
			},
			effect: {
				'ja-jp': "相手の進化したポカモンからの攻撃によってスローポークに与えられた損害は、10（脱力感と抵抗を適用した後）10削減されます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "噛む",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
