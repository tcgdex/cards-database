import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Dusclops",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [356],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "サイキック除去",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。両方がヘッドである場合、防御ポケモンに取り付けられたすべてのエネルギーを捨ててください。",
			},
			damage: 20,
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				'ja-jp': "強力な手",
			},
			effect: {
				'ja-jp': "あなたの手にカードの数を数えます。その多くのダメージカウンターを防御ポケモンに置きます。この方法で7つ以上のダメージカウンターを配置することはできません。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
