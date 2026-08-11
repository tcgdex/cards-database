import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Rocket's Suicune",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [245],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "クイックストリーム",
			},
			effect: {
				'ja-jp': "ベンチ付きポケモンがない限り、コインをひっくり返します。テールの場合、シャッフルロケットのSuicune、およびすべてのエネルギーカードがデッキに取り付けられています。 （Rocket's Suicuneに添付された他のすべてのカードを破棄します。）",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
		},
	],
};

export default card
