import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "レディアン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [166],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "バトンパス",
			},
			effect: {
				ja: "ベンチに草のポケモンがある場合は、Ledianからすべての草のエネルギーカードを取り外し、それらのポケモンの1つに取り付けてから、そのポケモンとLedianを切り替えます。",
			},
			damage: 30,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
