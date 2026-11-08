import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブレルーム",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [286],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "葉の毒",
			},
			effect: {
				'ja-jp': "Breloomに草のエネルギーが付着している場合、防御ポケモンは現在毒されています。",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ハッスルパンチ",
			},
			effect: {
				'ja-jp': "次のターン中、ハッスルパンチ攻撃のベースダメージは70ではなく50です。",
			},
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
			stamp: ["1st edition"],
		},
	],
};

export default card
