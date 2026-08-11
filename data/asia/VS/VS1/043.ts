import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "プライスのスニーエル",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [215],
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "傷",
			},
			damage: 10,
		},
		{
			cost: ["Darkness", "Colorless"],
			name: {
				'ja-jp': "氷の爪",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与え、防御ポケモンが眠っています。",
			},
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
