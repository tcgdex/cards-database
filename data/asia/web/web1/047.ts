import { Card } from "models/database/card"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジェンガー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [94],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				'ja-jp': "闇の力",
			},
			effect: {
				'ja-jp': "ターン中に、あなたの手からジェンガーを演奏してポケモンの1つを進化させると、コインをひっくり返すことができます。頭の場合は、対戦相手のポケモンの1つを選択します。相手はそのポケモンとそれに取り付けられたすべてのカードを彼または彼女の手に返します。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: {
				'ja-jp': "PSYホラー",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。尾の場合、防御ポケモンは混乱しています。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
