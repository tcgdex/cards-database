import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグビー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [240],
	hp: 30,
	types: ["Fire"],
	stage: "Baby",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "スパッタ",
			},
			effect: {
				'ja-jp': "すべてのポケモンパワーは、次のターンの終わりまで機能しなくなります。",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
