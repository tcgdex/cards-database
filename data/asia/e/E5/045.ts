import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "natu",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [177],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "先見性",
			},
			effect: {
				'ja-jp': "いずれかのプレイヤーのデッキのトップ3カードを見て、好きなように再配置します。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "除去ビーム",
			},
			effect: {
				'ja-jp': "防衛ポケモンにエネルギーカードが付いている場合は、コインをひっくり返します。頭の場合は、それらのエネルギーカードの1つを選択して廃棄します。",
			},
			damage: 10,
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
