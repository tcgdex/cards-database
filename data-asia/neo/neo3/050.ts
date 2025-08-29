import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "Delibird",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [225],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "現在",
			},
			effect: {
				ja: "3コインをフリップします。正確に1がヘッドの場合、この攻撃は40のダメージを与えます。正確に2がヘッドの場合、防御ポケモンから3つのダメージカウンターを削除します。防御するポケモンのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。 3つすべてがヘッドである場合、この攻撃は60のダメージを与えます。 3つすべてがテールの場合、防御ポケモンからすべてのダメージカウンターを削除します。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
