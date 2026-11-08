import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダークウィッグラット",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [40],
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "暗い歌",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。尾の場合、防御ポケモンは混乱しています。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "目を覚まします",
			},
			effect: {
				'ja-jp': "防御するポケモンが眠っているか混乱している場合、この攻撃は20ダメージに加えて20ダメージを与えます。その後、防御ポケモンはもはや眠っていないか混乱していません。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
