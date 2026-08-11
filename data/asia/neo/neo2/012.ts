import { Card } from "models/database/card"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハウンドア（HR）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [228],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				'ja-jp': "スモッグ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				'ja-jp': "火を集めます",
			},
			effect: {
				'ja-jp': "廃棄パイルにファイアエネルギーカードがある場合は、それらの1つを選択して、ハウンドに取り付けます。",
			},
			damage: 20,
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
