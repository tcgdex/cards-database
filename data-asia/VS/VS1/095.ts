import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ロケットのentei",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [244],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				ja: "燃焼タックル",
			},
			effect: {
				ja: "RocketのEnteiに取り付けられた1つのエネルギーカードを廃棄します。 Rocket's Enteiはそれ自体に10ダメージを与えます。",
			},
			damage: 40,
		},
	],

	retreat: 2,

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
