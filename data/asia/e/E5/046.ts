import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "xatu",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [178],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "同期性",
			},
			effect: {
				'ja-jp': "任意の技術マシンをXatuに接続できます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ワープホール",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合は、廃棄パイルからカードを選択し、デッキの上に置きます。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",

		},
		{
			type: "normal",
			stamp: ["1st Edition"],
		},
	],
};

export default card
